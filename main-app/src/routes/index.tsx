import React, { lazy, Suspense, ComponentType } from 'react'
import { useRoutes } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import NotFound from '@/pages/404'
import { SUB_APP } from '@/micro'

// 后续增加layout组件 prop
interface RouteConfig {
  path: string
  element: any
  children?: RouteConfig[]
  meta: {
    requiredLogin?: boolean // 是否需要登录
  }
}

interface LazyComponentProps {
  importFunc: () => Promise<{ default: ComponentType<any> }>
  needProtect: boolean
}

// 懒加载、路由拦截
function LazyComponent(props: LazyComponentProps) {
  const { importFunc, needProtect = false } = props
  const LazyComponent = lazy(importFunc)
  return (
    <Suspense fallback={<div>路由懒加载...</div>}>
      {needProtect ? (
        <ProtectedRoute>
          <LazyComponent />
        </ProtectedRoute>
      ) : (
        <LazyComponent />
      )}
    </Suspense>
  )
}

const setProtectedRoute = (routes: RouteConfig[]): RouteConfig[] => {
  if (!routes.length) return []
  // 遍历增加权限HOC
  routes.forEach((route: RouteConfig) => {
    const {
      meta: { requiredLogin = false }
    } = route
    route.element = (
      <LazyComponent importFunc={route.element} needProtect={requiredLogin} />
    )
    route?.children &&
      route?.children.length &&
      setProtectedRoute(route.children)
  })
  return routes
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: () => import('@/pages/home'),
    meta: {
      requiredLogin: false
    }
  },
  {
    path: '/home',
    element: () => import('@/pages/home'),
    meta: {
      requiredLogin: false
    }
  },
  {
    path: `${SUB_APP.activeRule}/*`,
    element: () => import('@/pages/sub-app'),
    meta: {
      requiredLogin: false
    }
  }
]

const protectedRoutes = setProtectedRoute(routes)

const RouteElement = (): any => {
  const element = useRoutes([
    ...protectedRoutes,
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return element
}

export default RouteElement
