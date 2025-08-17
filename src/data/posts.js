import osintImage from "../assets/osint.png";

export const posts = [
  {
    id: "iphone17",
    title: "Iphone 17 Rumours : What to Expect from Apple's Next Release",
    date: "August 17, 2025",
    description:"Apple's 2025 release is expected to feature a new design that is more fashionable, slimmer, and lighter than before.  The iPhone 17 may represent a radical change in design, making it one of the most anticipated releases in years."
      ,
    image: osintImage,
    content: `
      <div class="space-y-6">
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202508/iphone-17-series-242753724-16x9.png?VersionId=rM_UC2rX4sJ0AI8QXF5m0c2Z_4OdQZms&size=690:388"
             alt="osint-framework" 
             class="rounded-lg shadow-lg w-full" loading="lazy" />
            <p class="left-1/2 text-green-400">(Image src : INDIA TODAY)</p>
        <p class="text-lg text-gray-300 leading-relaxed">
          One of Apple's most daring updates to date appears to be the iPhone 17.  The lineup, which is anticipated in September 2025, may include a new, incredibly thin 'iPhone 17 Air', 120Hz ProMotion screens in all models, a more precise 24MP front camera, and potent A19 CPUs.  The Pro models might have larger batteries, lightning-fast charging, and a revamped camera bar with a 48MP zoom lens.  The iPhone 17 series is expected to combine power, style, and next-generation innovation with its sleek new hues and potential price increases.
        </p>
        <h2 class="text-2xl font-bold text-green-400">Release & Models</h2>
        <p> Early September 2025 is when Apple's iPhone 17 lineup is anticipated to make its debut. According to reports, the launch is scheduled for September 9, 2025, with pre-orders taking place in the middle of the month and shipments beginning on September 19. The base iPhone 17, the new mid-tier iPhone 17 "Air," the iPhone 17 Pro and 17 Pro Max, and no "Plus" variant will probably be the four versions in the lineup. The Air variant, which has a smaller design (perhaps about 6 mm thick) and a ~6.6 mm display, is reported to replace the previous Plus size.

Anticipated release date: early September 2025 (ship by September 19; event by September 9).

iPhone models include the 17, 17, Air, Pro, and Pro Max (without the Plus).
iPhone 17 Air: The Plus's slim "Air" variant (around 6.6 inches in screen and 6 mm thick)</p>
      
    <h2 class="text-2xl font-bold text-green-400">Design & Colors</h2>
    <p>Leaked prototype units point to a significant redesign.  Reminiscent of Google's Pixel phones, the Pro versions seem to abandon the previous square camera island in favor of a full-width rectangle camera bar.  According to early speculations, Apple may switch the titanium frame on the 17 Pro series to an aluminum one for durability.  Meanwhile, the basic iPhone 17 will have the same two-vertical-lens rear as the iPhone 16.</p>
    <h2 class="text-2xl font-bold text-green-400">Performance</h2>
    <p>Apple's next CPUs are anticipated to be used in all iPhone 17 versions.  The iPhone 17 Pro and Pro Max will receive the speedier A19 Pro chip (made on a cutting-edge 3nm technology), while the iPhone 17 and 17 Air will probably have the ordinary A19 chip.
    According to rumors, all versions will have 12 GB of RAM, up from the 16 Pro's 8 GB.
    </p>

    <h2 class="text-2xl font-bold text-green-400">Battery</h2>
    <p>Sources indicate that the 17 Pro Max will have a capacity of approximately 5,000 mAh, making it the largest iPhone battery ever. It is approximately 8% larger than the 16 Pro Max.  Because of its thin frame, the smaller 17 Air would require a lower battery (~2,800 mAh).</p>

    <h2 class="text-2xl font-bold text-green-400">Pricing</h2>
    <p>According to a Jefferies analyst and a well-known Weibo leaker, each model will cost roughly $50 more in the US than its iPhone 16 equivalent.The iPhone 17 Pro might retail for about $1,049 in that case (up from $999), and the 17 Pro Max for about $1,249.In the United States, the new 17 Air is anticipated to cost approximately $899, the same as the 16 Plus from the previous year. Of course this are just rumours.</p>
    `,
    tags : ["apple","google","google-pixel","iphone","iphone17","rumours","iphone17-pro-max","iphon16","iphone-16-pro-max","iphone-17-pro","trends","Apple iPhone 2025","iPhone 17 design","Apple launch event","iPhone 17 rumors","iPhone 17 leaks","Smartphone trends"]
  },
  {
    id: "all-about-osint",
    title: "OSINT : Unmasking the Digital World",
    date: "August 16, 2025",
    description:
      "In today's world everything is traceable! You're every click , every like, every post is a digital footprint. OSINT doesn't involve hacking like shown in movies , it is finding information about someone which is already available on Internet",
    image: osintImage,
    content: `
      <div class="space-y-6">
        <img src=${osintImage}
             alt="osint-framework" 
             class="rounded-lg shadow-lg w-full" loading="lazy" />
        <p class="text-lg text-gray-300 leading-relaxed">
          Every click, post, and interaction in the current digital world creates a trail.  These breadcrumbs are used by organizations, investigators, and even hackers to obtain information; this technique is called Open-Source Intelligence (OSINT).  In contrast to Hollywood hacking sequences, OSINT is about strategically examining publically available data rather than usually breaking into systems.
        </p>

        <h2 class="text-2xl font-bold text-green-400">What is OSINT?</h2>
        <p>OSINT referes to as Open Source Intelligence. It includes analysing information available on : </p>
        <ul class="list-disc list-inside space-y-2 text-gray-300">
        <li><strong>Social Media Posts</strong>
        <li><strong>News Articles</strong>
        <li><strong>Internet(Browsing)</strong>
        <li><strong>Public Government Records</strong>
        </ul>

        <h2 class="text-2xl font-bold text-green-400">OSINT tools : </h2>
        <p>There are many tools for performing OSINT operations. But the popular ones include : 
        <ul class="list-disc list-inside space-y-2 text-gray-300">
        <li><strong>Maltego</strong> : For link analysis and data mining.</li>
        <li><strong>Google Dorking</strong>  : Using advanced Google queries to find hidden info.</li>
        <li><strong>theHarvester</strong> : Gathers emails, subdomains, and employee names.</li>
        <li><strong>Public Government Records</strong>
        </ul>
        <br>
        Explore more OSINT tools : <a href="https://osintframework.com/" target="_blank"><span class="text-green-400 font-semibold">OSINT Framework</span></a>
      </p>

      <h2 class="text-2xl font-bold text-green-400">How to Stay Safe from OSINT</h2>
      <p class="text-lg text-gray-300 leading-relaxed">
  While you can’t erase your digital footprint completely, you can make it much harder for others to gather 
  sensitive information about you. Here are some tips:
</p>
    <ul class="list-disc list-inside space-y-2 text-gray-300">
  <li><strong>Have I Been Pwned? </strong> – Check if your email/credentials are leaked.</li>
  <li><strong>Use Strong & Unique Passwords</strong> – Don’t reuse the same password across multiple sites.</li>
  <li><strong>Enable 2FA</strong> – Add an extra layer of protection to your accounts.</li>
  <li><strong>Be Careful What You Post</strong> – Avoid oversharing personal details like your location, workplace, or daily routines.</li>
  <li><strong>Audit Your Digital Footprint</strong> – Search your own name and email to see what’s publicly available.</li>
  <li><strong>Use Privacy Settings</strong> – Lock down your social media profiles where possible.</li>
  <li><strong>Regularly Monitor Data Breaches</strong> – Keep checking services like Have I Been Pwned.</li>
</ul>

    <h2 class="text-2xl font-bold text-green-400">Risks and Ethics</h2>
    <p>
    While OSINT itself is legal (as it uses public data), misuse can cross into unethical or illegal territory. The golden rule: <span class="font-bold bg-red-600 p-0.5 text-white">Use it responsibly</span>.
    </p>

    <h2 class="text-2xl font-bold text-green-400">Software</h2>
    <p>The iPhone 17 will come with iOS 26, which is said to have new features throughout Apple's ecosystem as well as a new "Liquid Glass" user interface (translucent, glass-like layers).</p>
    

      </div>
    `,
    tags : ["cybersecurity","osint","new","hacking","digital-security","Ai","programming","software","trends"]
  },
  {
    id: "dijkstra-throne-falls",
    title: "After 40 Years, Dijkstra’s Throne Falls: Tsinghua Researchers Unveil Faster Shortest Path Algorithm",
    date: "August 15, 2025",
    description:
      "Tsinghua University researchers led by Prof. Ran Duan have shattered a 40-year algorithmic record with a deterministic method faster than Dijkstra’s, breaking the infamous sorting barrier.",
    image: "https://via.placeholder.com/1200x500?text=Algorithm+Breakthrough",
    content: `
      <div class="space-y-6">
        <img src="https://i2.wp.com/www.geopolitika.hu/wp-content/uploads/2017/10/shutterstock_522911992.jpg?resize=800%2C445" 
             alt="Algorithm Illustration" 
             class="rounded-lg shadow-lg w-full" loading="lazy" />
        <p class="text-lg text-gray-300 leading-relaxed">
          For decades, <a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" target="_blank"><span class="text-green-400 font-semibold">Dijkstra’s algorithm</span></a> has been the undisputed ruler of single-source shortest path problems in graphs with non-negative weights. 
          With a runtime of <code>O(m log n)</code>, it was long believed that deterministic improvements were impossible — 
          a belief reinforced by the so-called <em>sorting barrier</em>.
        </p>

        <p class="text-lg text-gray-300 leading-relaxed">
          That assumption has just been shattered. A team at <span class="font-semibold">Tsinghua University</span>, 
          led by <strong>Professor Ran Duan</strong>, has unveiled a new algorithm running in 
          <code>O(m · log<sup>2/3</sup> n)</code> time — the first deterministic improvement over Dijkstra’s method in nearly 
          <span class="font-bold text-green-400">40 years</span>.
        </p>

        <h2 class="text-2xl font-bold text-green-400">Breaking the Sorting Barrier</h2>
        <p class="leading-relaxed">
          The “sorting barrier” stems from the need to process vertices in exact order of distance — a task similar to sorting. 
          In the 1980s, Tarjan and others proved this limitation for comparison-based priority queues.  
          The Tsinghua method sidesteps the issue entirely by:
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Partial Relaxations</strong> – Only relaxing edges when needed, cutting wasted work.</li>
          <li><strong>Frontier Compression</strong> – Grouping candidate vertices into compact “pivots” for faster processing.</li>
          <li><strong>Recursive Divide-and-Conquer</strong> – Splitting the problem into smaller, more efficient subproblems.</li>
        </ul>

        <h2 class="text-2xl font-bold text-green-400">Why It Matters</h2>
        <p>
          This isn’t just an academic curiosity — it’s the first major leap in deterministic shortest path algorithms in decades. 
          Sparse graphs see the biggest gains, but the real treasure may be the inspiration this provides for future large-scale 
          network optimizations.
        </p>

        <blockquote class="border-l-4 border-green-400 pl-4 italic text-gray-400">
          “This work doesn’t just beat Dijkstra — it proves that the throne wasn’t unshakable after all.”
        </blockquote>

        <h2 class="text-2xl font-bold text-green-400">Looking Ahead</h2>
        <p>
          While constants in the runtime may affect practical adoption, especially for dense graphs, 
          the theoretical implications are enormous. Whether this becomes the new industry standard 
          or a landmark in theory alone, the algorithm has already earned its place in computing history.
        </p>
      </div>
    `,
    tags : ["dijkstra-algorithm","algorithm","china","technology","new"],
  },
  
];
