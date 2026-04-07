// Blog post data (for demo, static array)
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  categories: string[];
}

export const posts: BlogPost[] = [
  {
    slug: 'example-post-1',
    title: 'Building Your Dream Home: Our Custom Homes Process',
    date: '2026-04-15',
    excerpt: 'Learn about the meticulous steps we take to bring your custom home vision to life, from initial design to final walkthrough...',
    content: `
<p>Embarking on the journey of building a custom home is an exciting endeavor. At Bar Moon Contracting, we believe in transparency and a structured approach to ensure your vision is realized with precision and care. Our process is designed to guide you seamlessly from concept to completion, embodying the "Texas Craftsmanship. Built to Last. Rooted in Integrity." ethos.</p>
<h2>Phase 1: Design & Planning</h2>
<p>It all begins with your dream. Our initial consultations involve a deep dive into your needs, desires, lifestyle, and budget. We'll work closely with you and your architect (or our recommended partners) to develop detailed blueprints and specifications. This phase is crucial for establishing a clear roadmap.</p>
<h3>Key Activities:</h3>
<ul>
  <li>Initial concept and requirement gathering</li>
  <li>Architectural design collaboration</li>
  <li>Detailed material and finish selection</li>
  <li>Budget finalization and contract signing</li>
</ul>
<h2>Phase 2: Pre-Construction</h2>
<p>Once the design is finalized and approved, we move into the pre-construction phase. This involves obtaining necessary permits, finalizing the construction schedule, and preparing the site for groundwork. We meticulously plan every step to ensure a smooth construction phase.</p>
<h2>Phase 3: Construction</h2>
<p>This is where your dream home truly takes shape. Our experienced crews work diligently, adhering to the highest standards of quality and safety. We maintain open communication throughout this phase, providing regular updates and addressing any questions you may have.</p>
<p>Whether you're looking for new <a href="/services/custom-homes">custom homes</a> or stunning <a href="/services/home-renovations">home renovations</a>, our commitment to quality remains unwavering.</p>
<h2>Phase 4: Final Walkthrough & Handover</h2>
<p>As construction nears completion, we conduct a thorough walkthrough with you to ensure every detail meets your satisfaction. Once all final adjustments are made, we officially hand over the keys to your beautiful new home.</p>
<p>Building a custom home is more than just construction; it's about creating a legacy. Let Bar Moon Contracting build yours.</p>
`,
    categories: ['Custom Homes', 'Process'],
  },
  {
    slug: 'example-post-2',
    title: 'Enhancing Outdoor Living: Trends in Landscape Design',
    date: '2026-04-10',
    excerpt: 'Discover the latest trends in landscape design and how we can transform your outdoor space into a beautiful and functional extension of your home...',
    content: `<p>Discover the latest trends in landscape design and how we can transform your outdoor space into a beautiful and functional extension of your home...</p>`,
    categories: ['Outdoor Living', 'Landscape Design'],
  },
];
