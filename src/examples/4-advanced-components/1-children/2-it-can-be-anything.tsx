type ButtonProps = {
  num: number
  children: (num: number) => string
}

const Button = ({ num, children }: ButtonProps) => {
  console.log(children(num))
  return (<button>
    Кнопка
  </button>)
}

const ReactExample4_1_2 = () => <div>
  <Button num={1} children={num => num.toString()}/>
  <Button num={2}>
    {num => `----${num.toString()}----`}
  </Button>
</div>
