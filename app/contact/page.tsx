// app/contact/page.tsx

'use client';

import Container from '../components/Container';
// ...existing code...

/* ── Contact Form (reads ?step= or ?service= from URL) ─── */
function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const step = searchParams.get('step');
    const service = searchParams.get('service');
    if (step) {
      setFormData((d) => ({ ...d, subject: `Question about Process Step ${step}` }));
    } else if (service) {
      setFormData((d) => ({
        ...d,
        subject: `Inquiry about ${service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}`,
      }));
    }
  }, [searchParams]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));
    },
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-dark-blue/60 border border-gray-600 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition';

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name *"
            required
            className={inputClass}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address *"
            required
            className={inputClass}
          />
        </div>
        {/* Add other form fields here if needed */}
      </form>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-blue">
        <Container className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gold-primary">Get In Touch</h3>
            <p className="text-lg mb-8 leading-relaxed">
              We're here to answer your questions and discuss your construction needs. Whether you're planning a custom home, a renovation, or need reliable repairs, reach out to us today.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gold-secondary mb-2">Service Areas</h4>
                <p className="text-lg">Central Texas and surrounding communities.</p>
              </div>
<<<<<<< HEAD
        <div className="relative z-10 max-w-3xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            We&apos;d Love to Hear From You
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Let&apos;s Talk About Your Project
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto">
            Quick repair, renovation, or custom build&mdash;we&apos;re here for it. Reach out and let&apos;s start a conversation about what&apos;s possible.
          </p>
        </div>
      </section>

      {/* ── Direct contact strip ─────────────────────────── */}
      <section className="bg-deep-blue border-y border-gold-primary/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold-primary/20">
          {/* Phone */}
          <a
            href="tel:+12545813808"
            className="group flex items-center gap-5 px-8 py-8 hover:bg-gold-primary/5 transition"
          >
            <div className="w-14 h-14 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gold-primary/20 transition">
              <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Call or Text</p>
              <p className="text-xl font-bold text-white group-hover:text-gold-primary transition">(254) 581-3808</p>
            </div>
          </a>
          {/* Email */}
          <a
            href="mailto:barmooncontracting@protonmail.com"
            className="group flex items-center gap-5 px-8 py-8 hover:bg-gold-primary/5 transition"
          >
            <div className="w-14 h-14 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gold-primary/20 transition">
              <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
              <p className="text-lg font-bold text-white group-hover:text-gold-primary transition break-all">barmooncontracting@protonmail.com</p>
            </div>
          </a>
        </div>
      </section>
=======
        <Container className="relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Let's Connect
          </h1>
          <h2 className="text-2xl lg:text-3xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Start Your Project with Bar Moon Contracting
          </h2>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-blue">
        <Container className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gold-primary">Get In Touch</h3>
            <p className="text-lg mb-8 leading-relaxed">
              We're here to answer your questions and discuss your construction needs. Whether you're planning a custom home, a renovation, or need reliable repairs, reach out to us today.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gold-secondary mb-2">Service Areas</h4>
                <p className="text-lg">Central Texas and surrounding communities.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gold-secondary mb-2">Email</h4>
                <p className="text-lg">
                  <a href="mailto:barmooncontracting@protonmail.com" className="hover:text-gold-primary transition-colors">
                    barmooncontracting@protonmail.com
                  </a>
                    <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden py-16 bg-deep-blue">
              </div>
>>>>>>> a6322ba (Apply responsive Container component to all main pages for consistent scaling)

      {/* ── Main content: form + encouragement ───────────── */}
      <section className="py-20 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* Left column: encouragement & info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
                      <Container className="relative z-10">
                        <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                          We&apos;d Love to Hear From You
                        </p>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                          Let&apos;s Talk About Your Project
                        </h1>
                        <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
                        <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto">
                          Quick repair, renovation, or custom build&mdash;we&apos;re here for it. Reach out and let&apos;s start a conversation about what&apos;s possible.
                        </p>
                      </Container>
            <div className="space-y-4">
              {[
                { icon: '✓', text: 'Free consultations — always' },
                { icon: '✓', text: 'Responses within 24 hours' },
                { icon: '✓', text: 'Licensed & insured in Texas' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-deep-blue/15 text-deep-blue text-xs flex items-center justify-center font-bold">
                    {item.icon}
                  </span>
                  <span className="text-gray-600 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Image accent */}
            <div className="relative mt-10 h-52 rounded-xl overflow-hidden hidden lg:block">
              <Image
                src="/images/family.jpg"
                alt="Bar Moon Contracting family"
                fill
                className="object-cover brightness-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm text-gray-200 italic">
                Family-owned. Community-proud.
              </p>
            </div>
          </div>

          {/* Right column: the form */}
          <div className="lg:col-span-3">
            <div className="bg-deep-blue p-8 md:p-10 rounded-2xl shadow-2xl border border-gold-primary/10">
              <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-gray-400 text-sm mb-8">
                Tell us what&apos;s on your mind&mdash;big dream, quick fix, or just a question. We&apos;re all ears.
              </p>
              <Suspense fallback={<div className="text-gray-400 py-8 text-center">Loading form&hellip;</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
<<<<<<< HEAD
        </div>
=======

        </Container>
>>>>>>> a6322ba (Apply responsive Container component to all main pages for consistent scaling)
      </section>

      {/* ── Subcontractor Partnership CTA ────────────── */}
      <section className="py-16 px-6 md:px-12 bg-dark-blue border-t border-gold-primary/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2">For Trade Professionals</p>
            <h3 className="text-2xl font-bold text-white mb-3">
              Skilled Subcontractor? Let&apos;s Partner Up.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We&apos;re building a network of reliable, quality-driven tradespeople across Central Texas. Fair pay, steady work, and a GC who respects your craft.
            </p>
          </div>
          <Link
            href="/subcontractors"
            className="shrink-0 inline-block bg-gold-secondary hover:bg-gold-primary text-dark-blue font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
          >
            Learn About Partnerships
          </Link>
        </div>
      </section>

      {/* ── Sign-off with logo ──────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-md mx-auto text-center">
          <div className="relative w-36 h-36 mx-auto mb-8">
            <Image
              src="/images/Layered Circle/BMC_Layered_Circle_Dist_01.png"
                      <Container className="relative z-10">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
                          Let's Connect
                        </h1>
                        <h2 className="text-2xl lg:text-3xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
                          Start Your Project with Bar Moon Contracting
                        </h2>
                      </Container>
                    </section>

                    {/* Contact Form & Info */}
                    <section className="py-20 bg-dark-blue">
                      <Container className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                          <h3 className="text-3xl font-bold mb-6 text-gold-primary">Get In Touch</h3>
                          <p className="text-lg mb-8 leading-relaxed">
                            We're here to answer your questions and discuss your construction needs. Whether you're planning a custom home, a renovation, or need reliable repairs, reach out to us today.
                          </p>
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xl font-bold text-gold-secondary mb-2">Service Areas</h4>
                              <p className="text-lg">Central Texas and surrounding communities.</p>
                            </div>
