//App.js
 
import { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent.js';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'Red-Tape M..', 
          price: 1469, 
          image: 
'https://worldbalance.com.ph/cdn/shop/products/WBZETARUNNERM_WHITE_5_540x.jpg?v=1675921983'
        },
        { id: 2, 
          name: 'VALERIAN M', 
          price: 1700, 
          image: 
'https://worldbalance.com.ph/cdn/shop/products/WBVALERIANLBLACK-TEAL_1_720x.jpg?v=1675844405'
        },
        { id: 3, 
          name: 'MFCT Mens..', 
          price: 5700, 
          image: 
"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/311108/02/fnd/IND/fmt/png/Questblitz-Men's-Running-Shoes"
        },
        { id: 4, 
            name: 'Puma Unisex..', 
            price: 2469, 
            image: 
  'https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-shoe/x/4/w/-original-imagg9tvs9n9dgf5.jpeg?q=20&crop=false'
          },
        { id: 5, 
            name: 'Timberland M..', 
            price: 10800, 
            image: 
  'https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1741199053/TB110061713-ALT4/Mens-Timberland-Premium-6Inch-Waterproof-Boot.png'
          },
        { id: 6, 
            name: 'WOMENS AD..', 
            price: 9700, 
            image: 
  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1690577051-81gG7a9n-VL.jpg?crop=1xw:1.00xh;center,top&resize=980:*'
          },
          { id: 7, 
              name: 'KALENJI Men..', 
              price: 2299, 
              image: 
    'https://contents.mediadecathlon.com/p2254442/a926473ac785914bcf52e4c6c67ff0a3/p2254442.jpg?format=auto&quality=70&f=650x0'
            },
            { id: 8, 
                name: 'Converse Chu..', 
                price: 1340, 
                image: 
      'https://cdn.dooca.store/296/products/tenis-2-16_1080x1080+fill_ffffff.png?v=1689881669&webp=0'
              }
          
        
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;
