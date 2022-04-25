import './public-path'
import React from 'react'
import App from './App'
import ReactDom from 'react-dom'
import './styles/global.less'

const render = (props: any) => {
	const { container } = props
	console.log({ props })
	ReactDom.render(
		<App />,
		container ? container.querySelector('#root') : document.querySelector('#root')
	)
}

if (!window.__POWERED_BY_QIANKUN__) {
	render({})
}

export async function bootstrap(): Promise<void> {
	await console.log('sub app boostrap')
}

export async function mount(props: any): Promise<void> {
	await console.log('sub app mount', props)
	render(props)
}

export async function unmount(props: any): Promise<void> {
	const { container } = props
	await console.log('sub app unmoumt')
	ReactDom.unmountComponentAtNode(
		container ? container.querySelector('#root') : document.querySelector('#root')
	)
}
