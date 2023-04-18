import { ReactNode } from 'react'


type ButtonProps = {
  children: ReactNode
}

const Button = ({children}: ButtonProps) => (
  <button>
    {children}
  </button>
)

const ReactExample4_1_1 = () => <div>
  <Button>123</Button>
  <Button>dsadsa</Button>
  <Button>
    <span>СПАН</span>
  </Button>
</div>
