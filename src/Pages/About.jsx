import AboutImage from '../assets/about.png'

const About = () => {
  return (
    <section className="h-auto w-11/12 mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
         <div className="py-1">
           <h2 className="uppercase tracking-widest text-base">About Us</h2>

           <h2 className="text-3xl md:text-4xl  my-4 font-bold title text-[#7c8c7d]">
            How strawberyl began
           </h2>

           <p className="opacity-50 text-base">
            Founded in 2015 by jewelry designer Eleanor Rose, Strawberyl began as a small studio in San Francisco with a simple mission: to create beautiful, sustainable jewelry that celebrates individuality and the natural world.<br/><br/>
            Eleanor's fascination with jewelry began in her grandmother's attic, where she discovered a vintage jewelry box filled with treasures from the past. Each piece told a story, and Eleanor was captivated by how something so small could hold so much meaning.<br/><br/>
            After studying at the California College of Arts and apprenticing with master jewelers in Florence, Italy, Eleanor returned to San Francisco with a vision to create a jewelry brand that would blend traditional craftsmanship with contemporary design while maintaining a commitment to ethical practices and sustainability.
           </p>
         </div>

         <img src={AboutImage} alt="about-hero" className="object-cover hidden md:block h-[500px]" />
      </div>

      <div className="md:text-center text-left my-14 w-full md:w-2/3 mx-auto">
         <h2 className="text-3xl md:text-4xl my-4 font-bold title text-[#7c8c7d]">
            Our History
           </h2>
           <p className="opacity-50 text-base">
            The name 'Strawberyl' is a blend of 'strawberry' and 'beryl' – combining the sweet, natural beauty of the fruit with the lasting elegance of the mineral family that includes precious gems like emerald and aquamarine. This union represents our philosophy of creating jewelry that is both delightful and enduring.
           </p>
      </div>

       <h2 className="text-3xl md:text-4xl md:text-center text-left mt-4 font-bold title text-[#7c8c7d]">
            Our Values
       </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 w-full md:w-11/12 mb-4 mx-auto">

            <div className=" flex flex-col items-center md:p-6 justify-center">
              <h2 className="md:text-4xl text-2xl my-3 font-semibold self-start title">Sustainability</h2>
              <p className="opacity-50 text-base">We use recycled precious metals, ethically sourced gemstones, and eco-friendly practices to minimize our environmental impact. Our packaging is plastic-free and made from recycled materials.</p>
            </div>
            <div className=" flex flex-col items-center md:p-6 justify-center">
              <h2 className="text-2xl md:text-4xl my-3 font-semibold self-start title">Community</h2>
              <p className="opacity-50 text-base">We believe in giving back and partner with organizations that support women's education and environmental conservation. We also mentor emerging jewelry designers and artisans in our community.</p>
            </div>
            <div className=" flex flex-col items-center md:p-6 justify-center">
              <h2 className="text-2xl md:text-4xl  my-3 font-semibold self-start title">Quality</h2>
              <p className="opacity-50 text-base">We never compromise on quality, using only the finest materials and craftsmanship in every piece we create. We stand behind our work with a lifetime guarantee against manufacturing defects.</p>
            </div>

       </div>

        <div className="grid grid-cols-1 gap-2 w-full md:w-7/12 mb-4 mt-10">
          <div className=" flex flex-col md:flex-row items-center justify-center group">
              <h2 className="font-extrabold title md:text-9xl text-7xl self-end opacity-20 transform duration-500 group-hover:-rotate-12 group-hover:scale-110">01</h2>
              <div className="flex flex-col items-center p-2 md:p-6 justify-center">
                  <h2 className="text-2xl md:text-4xl  my-3 font-semibold self-start title">Our Craft</h2>
                  <p className="opacity-50 text-base">Every Strawberyl piece is handcrafted in our San Francisco studio by a team of skilled artisans who share our passion for quality and detail. We combine traditional techniques with modern technology to create pieces that are both timeless and contemporary.</p>
              </div>
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-center group">
            <h2 className="font-extrabold title text-7xl md:text-9xl self-end opacity-20 transform duration-500 group-hover:-rotate-12 group-hover:scale-110">02</h2>
            <div className="flex flex-col items-center p-2 md:p-6 justify-center">
                <h2 className="text-2xl md:text-4xl my-3 font-semibold self-start title">Our Journey Continues</h2>
                <p className="opacity-50 text-base">Today, Strawberyl has grown from Eleanor's small studio to a team of passionate artisans and designers, but our commitment to our founding principles remains unchanged. Each piece is still designed and handcrafted in San Francisco with the same care and attention to detail.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About