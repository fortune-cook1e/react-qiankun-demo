interface InitialState {
  token: string
  name: string
}

// 采用Shared方案负责 父子应用通信
export class Shared {
  state: InitialState = {
    token: '',
    name: ''
  }

  public getToken(): string {
    return this.state.token || ''
  }

  public setToken(token: string): void {
    this.state = {
      ...this.state,
      token
    }
  }

  public goHome(): void {
    const origin = window.location.origin
    history.pushState(null, '', origin)
  }

  public setName(name: string): void {
    this.state = {
      ...this.state,
      name
    }
  }
}

export default new Shared()
