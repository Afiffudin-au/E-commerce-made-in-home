import React from 'react'
import './Home.css'
import Product from '../prodcut/Product'
function Home() {
  return (
    <div className="Home">
      <div className="Home__row">
        <Product id='1' img="https://www.microway.com/wp-content/uploads/NVIDIA-DGX-Station-Deep-Learning-Workstation.jpg" title="Nvidia Station 2" price={14500} rate={5} totalSold={12} decs="Lorem Ipsum"/>
        <Product id='2' img="https://www.microway.com/wp-content/uploads/NVIDIA-DGX-Station-Deep-Learning-Workstation.jpg" title="Nvidia Station 1" price={24500} rate={5} totalSold={12} decs="Lorem Ipsum"/>
        <Product id='3' img="https://www.microway.com/wp-content/uploads/NVIDIA-DGX-Station-Deep-Learning-Workstation.jpg" title="Nvidia Station 4" price={34500} rate={5} totalSold={12} decs="Lorem Ipsum"/>
        <Product id='4' img="https://www.microway.com/wp-content/uploads/NVIDIA-DGX-Station-Deep-Learning-Workstation.jpg" title="Nvidia Station 5" price={44500} rate={5} totalSold={12} decs="Lorem Ipsum"/>
        <Product id='5' img="https://www.microway.com/wp-content/uploads/NVIDIA-DGX-Station-Deep-Learning-Workstation.jpg" title="Nvidia Station 5" price={44500} rate={5} totalSold={12} decs="Lorem Ipsum"/>
        <Product id='6' img="https://www.microway.com/wp-content/uploads/NVIDIA-DGX-Station-Deep-Learning-Workstation.jpg" title="Nvidia Station 5" price={44500} rate={5} totalSold={12} decs="Lorem Ipsum"/>
        <Product id='7' img="https://www.microway.com/wp-content/uploads/NVIDIA-DGX-Station-Deep-Learning-Workstation.jpg" title="Nvidia Station 5" price={44500} rate={5} totalSold={12} decs="Lorem Ipsum"/>
      </div>
    </div>
  )
}
export default Home
