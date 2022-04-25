import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import SharedModule from '@/micro/shared'

const shared = SharedModule.getShared()

const Page = (): JSX.Element => {
	const navigate = useNavigate()

	const onShared = () => {
		console.log('onshared...')
		console.log(shared.goHome())
	}

	return (
		<div>
			<h1>this is child-home-page</h1>
			<Button onClick={() => navigate('/other')}>go other page</Button>
			<Button onClick={onShared}>触发Shared父应用方法</Button>
		</div>
	)
}

export default Page
