import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { processSteps } from "@/data/howItWorks";
import { valueProps } from "@/data/valueProps"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

      <header>
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-6">
            Embrace Family!
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
            Connecting loving families
          </p>

          <div>
            <Link href='/login' className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all">
              I Want to Adopt
            </Link>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Safe and Caring Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform provides comprehensive support through every step of this delicate process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {valueProps.map((item, index) => (
              <div key={index} className="bg-rose-50 p-8 rounded-xl text-center">
                <span className="text-4xl mb-4 inline-block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((item, index) => (
              <div key={index} className="flex items-start mb-10 last:mb-0">
                <div className="bg-white text-rose-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-rose-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
            Inspiring Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-rose-50 p-8 rounded-xl">
                <p className="text-lg italic mb-6 text-gray-800">"{testimonial.quote}"</p>
                <p className="font-semibold text-rose-700">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Part of This Story?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Whether offering a loving home or seeking support during this delicate time, we're here for you.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div >

  );
}