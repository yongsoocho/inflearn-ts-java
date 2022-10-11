interface ITest {
  value: any;
  code: any;
}

function cp<T extends ITest>(param: T): T {
  console.log(param.value);
  console.log(param.code);

  return param;
}

cp<{ name: string; value: any; code: any }>({
  name: "hello world",
  value: 0,
  code: 0,
});
cp<{ year: number; value: any; code: any }>({
  year: 2022,
  value: 0,
  code: 0,
});

// search some people -> filter -> age, name, ..
interface IFilter<T> {
  value: T;
}

const sp1: IFilter<number> = { value: 25 };
const sp2: IFilter<string> = { value: "yongsoo" };

// B.L 서버에서 일어는 일들을 처리
// 일을 도와주는 친구 f.E

interface IHelper {}

interface IHealer {}

class BackendLogin<T> {
  constructor(private fieldEx: T) {}
}

// const a = new BackendLogin<IHealer>();
// const b = new BackendLogin<IHelper>();
