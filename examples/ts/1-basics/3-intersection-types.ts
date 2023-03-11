type Obj1 = {
  name: string
}
type Obj2 = {
  value: number
}

type GigaMergedMutant = Obj1 & Obj2 & {
  mutantField: 'mutant'
}

const mutant: GigaMergedMutant = {
  name: 'dsadsa',
  value: 42,
  mutantField: 'mutant'
}