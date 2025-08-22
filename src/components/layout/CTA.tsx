'use client'
import Button from "@/components/ui/Button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            A better way to work, together
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Simple and intuitive project management software for moving real work forward
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
                          className="bg-white text-indigo-600 cursor-pointer hover:bg-gray-100 text-lg px-8 py-4"
            >
              Try it free
            </Button>
            <Button 
              variant="secondary"
                          className="border-2 border-white cursor-pointer text-indigo-600 bg-transparent hover:bg-white hover:text-indigo-600 text-lg px-8 py-4"
            >
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;