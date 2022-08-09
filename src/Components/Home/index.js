import logo from '../../Asset/image/logo.svg';
import './style.css';

const Home = () => {
    //B1 Check prime number
    const END_NUMBER = 100;
    const result = [];

    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0){
                return false; 
            } 
        }
        return num > 1;
    }

    for(let number = 1; number <= END_NUMBER; number++){
        if(isPrime(number)) result.push(number);
    }

    console.log("Pime array number ",result);

    //B2
    const arrayA = [1,2,3,4,5,6,7];
    const objectA = {};

    const arrayB = [1,2,3,9];

    arrayA.forEach(element => {
        objectA[`${element}`] = element
    });
    const result2 = arrayB.filter(element => objectA[element])
    console.log(result2);

    //B3
    const isPalindromeNumber = (number) => {
        if (isNaN(number)) return false;
        const reverseNumber = String(number).split("").reverse().join("");
        if (Number(reverseNumber) === number) return true;
        return false;
    };
    console.log(isPalindromeNumber(767));

    //B4
    const  binetFunction = (n) => {    
        return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5));
    };
    console.log(binetFunction(7));
      
   return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <a
          className="Home-link"
          href="/."
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJS 
        </a>
      </header>
    </div>
  );
}

export default Home;