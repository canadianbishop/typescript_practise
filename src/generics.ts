import {z} from 'zod'

let array1: string[] = ['Apple', 'Banana', 'Mango'];
 let array2: number[] = [1, 2, 3];
 let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];

 

function generatArr <T>(len:number, val:T): Array<T>{
      const newArr: Array<T> = Array(len).fill(val) ;
      return newArr;
}


function returnVal <T,U>(val1:T, val2:U): [T,U]{
      return [val1, val2]
}


// generics type constraints ..

function printval <T extends string> (val: T): T{
      return val
}


type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};


// fetching data and zod validation

const tourSchema = z.object({
      id: z.string(),
      name: z.string(),
      image: z.string(),
      info: z.string(),
      price: z.string(),
      // boolen: z.string()
})

type Tour = z.infer<typeof tourSchema>

const url = 'https://www.course-api.com/react-tours-project';


async function fetchTour(url:string): Promise<Tour[]>{
    try {
      const response = await fetch(url);
      if(!response.ok){
            throw new Error(`feching status: ${response.status}`)
      }
      const rawData: Tour[] = await response.json();
      const result = tourSchema.array().safeParse(rawData)
      if(!result.success){
            // throw new Error(`invalid data: ${result.error}`);
            console.error(result.error.format())
      }
      // return result.data;
      return result.data
      
    } catch (error) {
      error instanceof Error ? `http erro : ${error.message}`: 'unknown error';

      return []
    }
}

const tours = await fetchTour(url)

console.log(tours)
