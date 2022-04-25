class Micro {
	isSubApp: boolean = false
	userName: string = ''
	token: string = ''
	constructor(subApp: boolean) {
		this.isSubApp = subApp
	}
}

export default new Micro(true)
