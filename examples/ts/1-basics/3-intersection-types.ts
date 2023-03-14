type Obj1 = {
  name: string
  value: number
}
type Obj2 = {
  value: number
}
// interface IObj extends Obj1 {
//   value: number
// }

type Mut = Pick<Obj1, 'name'> & Obj2
const mut: Mut = {
  name: '',
  value: 2
}

type GigaMergedMutant = Mut | {
  mutantField: 'mutant' | number
}

const mutant: GigaMergedMutant = {
  // name: 'dsadsa',
  // value: 42,
  mutantField: 'mutant'
}

const mutant2: GigaMergedMutant = {
  // mutantField: 'mutant',
  value: 42,
  // name: 'ds'
}