interface InitialState {
  token: string
  name: string
}

class Shared {
  state: InitialState
  constructor(state: InitialState) {
    this.state = state
  }

  setToken(token: string) {
    this.state = {
      ...this.state,
      token
    }
  }

  setName(name: string) {
    this.state = {
      ...this.state,
      name
    }
  }
}

export default new Shared({ token: '', name: '' })
