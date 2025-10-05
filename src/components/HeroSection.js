import React from 'react';
export default function HeroSection({ title, subtitle, cta1, cta2 }) {
return (
<section className="p-12 text-center bg-gray-100">
<h1 className="text-4xl font-bold mb-4">{title}</h1>
<p className="text-lg mb-6">{subtitle}</p>
<div className="space-x-4">
<button className="bg-blue-500 text-white px-4 py-2 rounded">{cta1}</button>
<button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">{cta2}</button>
</div>
</section>
);
}
