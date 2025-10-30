import { Instagram, Mail, MapPin, ArrowRight } from 'lucide-react';

const SelfIntro = () => {
  return (
    <section className="bg-[#F8F1E1] min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="bg-[#2D2D2D] rounded-3xl p-8 shadow-lg w-full max-w-sm flex flex-col items-center text-white">
          <div className="w-full h-64 rounded-2xl overflow-hidden mb-6">
            <img 
              src="/florence.jpg" 
              alt="Florence Tan" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold">Florence Tan</h1>
          <p className="text-gray-400 mb-6">She/Her</p>
          <div className="space-y-4 w-full">
            <div className="flex items-center">
              <MapPin className="mr-3" />
              <span>Kuala Lumpur</span>
            </div>
            <div className="flex items-center">
              <Instagram className="mr-3" />
              <span>florencez.t___</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3" />
              <span>fadksvflorence@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="text-[#3A3A3A] max-w-lg">
          <h2 className="text-8xl font-bold text-[#D37A47] mb-4">Hello!</h2>
          <p className="mb-6 text-lg">
            Hi there! I'm Florence. A curious soul who finds joy in turning messy ideas into meaningful designs. I believe every pixel should tell a story, and every experience should make someone smile.
          </p>
          <p className="mb-8 text-lg">
            I mix curiosity, empathy, and creativity to craft experiences that not only work well but feel right. Whether it's a website, an app, or a story told through design.
          </p>
          <p className="text-xl font-bold mb-6">
            I create designs that connect, inspire, and simplify life — because good design isn’t just seen, it’s felt.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center bg-[#D37A47] text-white py-3 px-6 rounded-full text-lg hover:bg-[#C06C3A] transition-colors"
          >
            See my linkedin page <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;