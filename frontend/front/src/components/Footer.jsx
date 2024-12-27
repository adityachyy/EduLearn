const Footer=()=>
{
    return (
        <footer class="bg-gray-800 text-white py-8">
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* <!-- About Section --> */}
    <div>
      <h2 class="text-lg font-semibold mb-4">About Us</h2>
      <p class="text-sm text-gray-300">
        Explore a variety of courses on our platform and enhance your skills. Click on any course to learn more!
      </p>
    </div>
    {/* <!-- Quick Links --> */}
    <div>
      <h2 class="text-lg font-semibold mb-4">Quick Links</h2>
      <ul class="text-sm space-y-2">
        <li><a href="/course1" class="hover:text-gray-400">Web Development</a></li>
        <li><a href="/course2" class="hover:text-gray-400">Data Science</a></li>
        <li><a href="/course3" class="hover:text-gray-400">Digital Markketing</a></li>
        <li><a href="/course4" class="hover:text-gray-400">Python</a></li>
        <li><a href="/course4" class="hover:text-gray-400">Java</a></li>
      </ul>
    </div>
   
    {/* <div>
      <h2 class="text-lg font-semibold mb-4">Follow Us</h2>
      <div class="flex space-x-4">
        <a href="https://www.facebook.com" class="hover:text-gray-400"><i class="fab fa-facebook"></i> Facebook</a>
        <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter"></i> Twitter</a>
        <a href="#" class="hover:text-gray-400"><i class="fab fa-instagram"></i> Instagram</a>
        <a href="#" class="hover:text-gray-400"><i class="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </div> */}
 <div>
  <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />
      <span>Facebook</span>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_As_of_2021.svg" alt="Twitter" className="w-8 h-8" />
      <span>Twitter</span>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-8 h-8" />
      <span>Instagram</span>
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.svg" alt="LinkedIn" className="w-8 h-8" />
      <span>LinkedIn</span>
    </a>
  </div>
</div>




  </div>
  <div class="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
    &copy; 2024 Your Website Name. All rights reserved.
  </div>
</footer>

    )
}
export default Footer