/**
 * product-data.js
 * Centralized FOAMICO product catalogue data
 * Used by: products/category.html (category pages)
 * Source: foamico.com — verified February 2025
 */
window.FOAMICO_PRODUCTS = {

  categories: {
    mainstations: {
      slug: 'mainstations',
      title: 'Mainstations',
      description: 'Wall-mounted central cleaning stations with built-in pumps. Supply pressurised water to connected satellites across your facility. Available in institutional (up to 12 bar) and heavy-duty (up to 27 bar) configurations.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: 'var(--primary-light)',
        color: 'var(--primary)'
      },
      heroImages: [
        { src: 'https://www.foamico.com/media/io0hlvt1/7011542-ms-0927-med-gammel-flowswitch-3-_0001.png', alt: 'FOAMICO Mainstation MS 0927' },
        { src: 'https://www.foamico.com/media/emeh1esm/control-closeup_web.png?rmode=max&width=800', alt: 'FOAMICO smart control panel' }
      ],
      metaTitle: 'FOAMICO Mainstations | Jensen Design & Service',
      metaDescription: 'Browse FOAMICO mainstation central cleaning units - institutional 12 bar and heavy-duty 27 bar configurations. Distributed by Jensen Design & Service in Australia & NZ.',
      subsections: ['institutional-12bar', 'heavy-duty-27bar']
    },
    satellites: {
      slug: 'satellites',
      title: 'Satellites',
      description: 'Decentralised workstations for rinsing, foaming, and sanitising. Supplied with pressurised water from a mainstation or booster. Available in Next, Light, and Baseline series.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      },
      heroImages: [
        { src: 'https://www.foamico.com/media/a4zhijgj/su-0127_50-next-7011504.png', alt: 'FOAMICO SU 0127 Next Satellite Unit' }
      ],
      metaTitle: 'FOAMICO Satellites | Jensen Design & Service',
      metaDescription: 'Browse FOAMICO satellite workstations - Next, Light, and Baseline series for rinsing, foaming, and sanitising. Distributed by Jensen Design & Service.',
      subsections: ['next-series', 'light-series', 'baseline-series']
    },
    boosters: {
      slug: 'boosters',
      title: 'Boosters',
      description: 'Pressure-supply units providing satellite workstations with pressurised water for multiple simultaneous users. Dynamic outlet pressure that constantly adapts to user count and inlet pressure.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
        bgColor: '#F0FDF4',
        color: '#22c55e'
      },
      heroImages: [
        { src: 'https://jensendesign.com.au/wp-content/uploads/2020/05/B-1080-27.jpg', alt: 'FOAMICO Booster B1080-27' },
        { src: 'https://www.foamico.com/media/lk5fjbgl/6815-2145.png?rmode=max&width=800', alt: 'FOAMICO Smart Display' }
      ],
      metaTitle: 'FOAMICO Boosters | Jensen Design & Service',
      metaDescription: 'Browse FOAMICO booster units - single pump, multi pump, high pressure, and pre-pressure configurations. Distributed by Jensen Design & Service.',
      subsections: ['single-pump-27bar', 'multi-pump-27bar', 'high-pressure-40-45bar', 'pre-pressure-boosters']
    },
    automatic: {
      slug: 'automatic',
      title: 'Automatic Solutions',
      description: 'Fully automated cleaning systems that reduce total cleaning time, physical labour, water and chemical usage. Programmable cleaning cycles for consistent, repeatable results.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',
        bgColor: '#F5F3FF',
        color: '#8b5cf6'
      },
      heroImages: [
        { src: 'https://jensendesign.com.au/wp-content/uploads/2020/05/AMS-300-300-150-300-300-300-450-closed.jpg', alt: 'FOAMICO AMS Automatic Mainstation' },
        { src: 'https://www.foamico.com/media/ixejw1dy/ams-300_7011800_7011801_7011802.png', alt: 'FOAMICO AMS 300 Series' }
      ],
      metaTitle: 'FOAMICO Automatic Solutions | Jensen Design & Service',
      metaDescription: 'Browse FOAMICO automatic cleaning systems - AMS mainstations and ASU satellites with programmable cleaning cycles. Distributed by Jensen Design & Service.',
      subsections: ['ams-series', 'asu-series']
    },
    mobile: {
      slug: 'mobile',
      title: 'Mobile Stations',
      description: 'Self-contained portable cleaning stations with built-in pump, compressor, and NEXT block technology. One-handle operation, single outlet, incredibly manoeuvrable. Available in 27 bar and 45 bar configurations.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>',
        bgColor: '#F0FDFA',
        color: '#14b8a6'
      },
      heroImages: [
        { src: 'https://jensendesign.com.au/wp-content/uploads/2020/05/mobile2-e1555402573486.jpg', alt: 'FOAMICO Mobile Unit MO 0127' },
        { src: 'https://www.foamico.com/media/lk5fjbgl/6815-2145.png?rmode=max&width=800', alt: 'FOAMICO smart display panel' }
      ],
      metaTitle: 'FOAMICO Mobile Stations | Jensen Design & Service',
      metaDescription: 'Browse FOAMICO portable mobile cleaning stations - heavy duty 27 bar and 45 bar configurations. Distributed by Jensen Design & Service.',
      subsections: ['mobile-27bar', 'mobile-45bar']
    },
    prediluted: {
      slug: 'prediluted',
      title: 'Prediluted Solutions',
      description: 'Systems that dilute concentrated cleaning chemicals with water to a predetermined concentration, eliminating concentrated chemicals in production areas. Precisely dosed via frequency-controlled Grundfos IE5 pumps.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
        bgColor: '#FFFBEB',
        color: '#f59e0b'
      },
      heroImages: [
        { src: 'https://www.foamico.com/media/alcn1m5i/7013319-360-rendering_0001.png', alt: 'FOAMICO Prediluted Satellite PSU 0127' }
      ],
      metaTitle: 'FOAMICO Prediluted Solutions | Jensen Design & Service',
      metaDescription: 'Browse FOAMICO prediluted satellites and mixing stations for simplified chemical management. Distributed by Jensen Design & Service.',
      subsections: ['prediluted-satellites', 'mixing-stations']
    },
    accessories: {
      slug: 'accessories',
      title: 'Accessories & Spare Parts',
      description: 'Genuine FOAMICO replacement parts, nozzles, hoses, fittings, and accessories to keep your equipment running at peak performance.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>',
        bgColor: '#FEF2F2',
        color: '#ef4444'
      },
      heroImages: [],
      metaTitle: 'FOAMICO Accessories & Spare Parts | Jensen Design & Service',
      metaDescription: 'Genuine FOAMICO replacement parts, nozzles, hoses, and accessories. Contact Jensen Design & Service for availability and pricing.',
      subsections: ['hoses-fittings', 'nozzles-lances', 'accessories-general']
    }
  },

  subsections: {
    'institutional-12bar': {
      id: 'institutional-12bar',
      title: 'Institutional \u2014 Up to 12 Bar',
      badgeLabel: 'Institutional',
      badgeClass: '',
      layout: 'expandable'
    },
    'heavy-duty-27bar': {
      id: 'heavy-duty-27bar',
      title: 'Heavy Duty \u2014 Up to 27 Bar',
      badgeLabel: 'Heavy Duty',
      badgeClass: 'product-subsection__badge--heavy',
      layout: 'expandable'
    },
    'next-series': {
      id: 'next-series',
      title: 'SU Next Series',
      badgeLabel: 'Next',
      badgeClass: 'product-subsection__badge--next',
      layout: 'expandable'
    },
    'light-series': {
      id: 'light-series',
      title: 'SU Light Series',
      badgeLabel: 'Light',
      badgeClass: 'product-subsection__badge--light',
      layout: 'expandable'
    },
    'baseline-series': {
      id: 'baseline-series',
      title: 'SU Baseline Series',
      badgeLabel: 'Baseline',
      badgeClass: 'product-subsection__badge--baseline',
      layout: 'expandable'
    },
    'single-pump-27bar': {
      id: 'single-pump-27bar',
      title: 'Single Pump Boosters \u2014 27 Bar',
      badgeLabel: 'Single Pump',
      badgeClass: 'product-subsection__badge--heavy',
      layout: 'expandable'
    },
    'multi-pump-27bar': {
      id: 'multi-pump-27bar',
      title: 'Multi Pump Boosters \u2014 27 Bar',
      badgeLabel: 'Multi Pump',
      badgeClass: 'product-subsection__badge--heavy',
      layout: 'expandable'
    },
    'high-pressure-40-45bar': {
      id: 'high-pressure-40-45bar',
      title: 'High Pressure Boosters \u2014 40/45 Bar',
      badgeLabel: 'High Pressure',
      badgeClass: 'product-subsection__badge--heavy',
      layout: 'expandable'
    },
    'pre-pressure-boosters': {
      id: 'pre-pressure-boosters',
      title: 'Pre-Pressure Boosters',
      badgeLabel: 'Pre-Pressure',
      badgeClass: '',
      layout: 'expandable'
    },
    'ams-series': {
      id: 'ams-series',
      title: 'Automatic Mainstations \u2014 AMS Series',
      badgeLabel: 'Mainstation',
      badgeClass: 'product-subsection__badge--heavy',
      layout: 'expandable'
    },
    'asu-series': {
      id: 'asu-series',
      title: 'Automatic Satellites \u2014 ASU Series',
      badgeLabel: 'Satellite',
      badgeClass: 'product-subsection__badge--next',
      layout: 'expandable'
    },
    'mobile-27bar': {
      id: 'mobile-27bar',
      title: 'Heavy Duty Mobile \u2014 Up to 27 Bar',
      badgeLabel: 'Heavy Duty',
      badgeClass: 'product-subsection__badge--heavy',
      layout: 'expandable'
    },
    'mobile-45bar': {
      id: 'mobile-45bar',
      title: 'Heavy Duty Mobile \u2014 Up to 45 Bar',
      badgeLabel: 'High Pressure',
      badgeClass: 'product-subsection__badge--heavy',
      layout: 'expandable'
    },
    'prediluted-satellites': {
      id: 'prediluted-satellites',
      title: 'Prediluted Satellites \u2014 PSU Series',
      badgeLabel: 'PSU',
      badgeClass: '',
      layout: 'expandable'
    },
    'mixing-stations': {
      id: 'mixing-stations',
      title: 'Mixing Stations \u2014 B-D Series',
      badgeLabel: 'Mixing',
      badgeClass: '',
      layout: 'expandable'
    },
    'hoses-fittings': {
      id: 'hoses-fittings',
      title: 'Hoses & Fittings',
      badgeLabel: 'Hoses',
      badgeClass: '',
      layout: 'expandable'
    },
    'nozzles-lances': {
      id: 'nozzles-lances',
      title: 'Nozzles & Lances',
      badgeLabel: 'Nozzles',
      badgeClass: '',
      layout: 'expandable'
    },
    'accessories-general': {
      id: 'accessories-general',
      title: 'General Accessories',
      badgeLabel: 'General',
      badgeClass: '',
      layout: 'expandable'
    }
  },

  products: [
    // ========== MAINSTATIONS - Institutional 12 Bar ==========
    {
      id: 'msc-ms-ultra-0106',
      name: 'MSC & MS ULTRA 0106',
      category: 'mainstations',
      subsection: 'institutional-12bar',
      layout: 'expandable',
      description: 'Single-user mainstation with integrated compressor for foam applications. Automatic pump operation controlled by physical flow switch.',
      tags: ['1 User', '8.5 Bar', 'Integrated Compressor'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '8.5 bar (at 3 bar inlet)' },
        { label: 'Max Flow', value: '30 L/min' },
        { label: 'Inlet Pressure', value: '2\u20134 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '0.5 + 0.75 kW' },
        { label: 'Voltage', value: '1x 220\u2013240V' },
        { label: 'Chemicals', value: '2 in single injector block' }
      ],
      features: ['Three-step cleaning via single handle (water, chemical 1, chemical 2)', 'Physical flow switch \u2014 no separate compressor switch needed', 'Full stainless steel construction', 'Automatic pump standby when changeover handle switches', 'ULTRA NEXT technology with colour-coded interface'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 4v16"/></svg>',
        bgColor: 'var(--primary-light)',
        color: 'var(--primary)'
      }
    },
    {
      id: 'ms-0112',
      name: 'MS 0112',
      category: 'mainstations',
      subsection: 'institutional-12bar',
      layout: 'expandable',
      description: 'Mainstation for small food plants, supermarkets, and large kitchen areas. Grundfos pump with frequency controller and IE5 efficiency.',
      tags: ['1 User', '14 Bar', 'NEXT Technology'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '14 bar (at 3 bar inlet)' },
        { label: 'Max Flow', value: '40 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '1.1 kW' },
        { label: 'Voltage', value: '1x 220\u2013240V' },
        { label: 'Chemicals', value: '3 through single outlet' }
      ],
      features: ['Single handle controls 4 cleaning steps (rinse + 3 chemicals)', 'Integrated compressor with automatic activation', 'Grundfos IE5 energy-optimised motor', 'Optimised block design for minimal pressure loss', 'Includes rinsing nozzle, foam nozzle, disinfection nozzle, lance, and chemical limiting nozzles'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 4v16"/></svg>',
        bgColor: 'var(--primary-light)',
        color: 'var(--primary)'
      }
    },
    {
      id: 'ms-0106-trolley',
      name: 'MS 0106 / MSC ULTRA 0106 on Trolley',
      category: 'mainstations',
      subsection: 'institutional-12bar',
      layout: 'expandable',
      description: 'Single-user mainstation mounted on a trolley with integrated compressor. Physical flow switch control for automatic pump operation.',
      tags: ['1 User', '8.5 Bar', 'Trolley Mount'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '8.5 bar (at 3 bar inlet)' },
        { label: 'Max Flow', value: '30 L/min' },
        { label: 'Inlet Pressure', value: '2\u20134 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '0.5 + 0.75 kW' },
        { label: 'Voltage', value: '1x 220\u2013240V' },
        { label: 'Chemicals', value: '2 in single injector block' }
      ],
      features: ['Trolley-mounted for flexible positioning \u2014 no permanent wall installation', 'One handle, one outlet for 3 cleaning steps', 'ULTRA NEXT technology with colour-coded operation', 'Full stainless steel construction', 'Physical flow switch activation'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 4v16"/></svg>',
        bgColor: 'var(--primary-light)',
        color: 'var(--primary)'
      }
    },
    {
      id: 'ms-ultra-0106-xa',
      name: 'MS ULTRA 0106 XA',
      category: 'mainstations',
      subsection: 'institutional-12bar',
      layout: 'expandable',
      description: 'Single-user mainstation without separate start/stop switches. Pump activates automatically when the gun or low-pressure valve opens via physical flow switch.',
      tags: ['1 User', '8.5 Bar', 'Flow Activated'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '8.5 bar (at 3 bar inlet)' },
        { label: 'Max Flow', value: '30 L/min' },
        { label: 'Inlet Pressure', value: '2\u20134 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '0.5 + 0.75 kW' },
        { label: 'Voltage', value: '1x 220\u2013240V' },
        { label: 'Chemicals', value: '2 through 1 outlet' }
      ],
      features: ['No separate start/stop switches \u2014 fully automatic activation', 'Physical flow switch triggers pump when gun opens', 'Compatible with Turbo Foam nozzle (included with accessory kits 3 and 4)', 'Full stainless steel construction', 'Colour-coded interface for intuitive operation'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 4v16"/></svg>',
        bgColor: 'var(--primary-light)',
        color: 'var(--primary)'
      }
    },

    // ========== MAINSTATIONS - Heavy Duty 27 Bar ==========
    {
      id: 'ms-0127',
      name: 'MS NEXT 0127',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'Complete wall-mounted cleaning station with integrated booster pump for rinsing, foaming, and disinfection. 3 chemicals in a single block with one outlet.',
      tags: ['1 User', '27 Bar', 'NEXT Technology'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2.2 kW' },
        { label: 'Chemicals', value: '3 through single outlet' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in display', 'One-handle operation for 4 cleaning steps', 'Automatic pump and compressor activation', 'Built-in diagnostics and fault detection', 'Full stainless steel construction'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'ms-0227',
      name: 'MS NEXT 0227',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'Wall-mounted cleaning station with integrated booster pump supporting 2 simultaneous users. Can be supplemented with additional satellite stations.',
      tags: ['2 Users', '27 Bar', 'Expandable'],
      specs: [
        { label: 'Users', value: '2 simultaneous' },
        { label: 'Max Flow', value: '60 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '3 kW' },
        { label: 'Chemicals', value: '3 through single outlet' }
      ],
      features: ['Grundfos IE5 motor with built-in smart display', 'One handle for 4 cleaning steps per user', 'High-quality foam mixing chamber', 'Expandable with satellite stations', 'Full stainless steel construction'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'ms-0327',
      name: 'MS NEXT 0327',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'Mid-capacity heavy-duty mainstation supporting 3 simultaneous users. Expandable with satellite stations for larger facility coverage.',
      tags: ['3 Users', '27 Bar', 'Expandable'],
      specs: [
        { label: 'Users', value: '3 simultaneous' },
        { label: 'Max Flow', value: '100 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '4 kW' },
        { label: 'Chemicals', value: '3 through single outlet' }
      ],
      features: ['Grundfos IE5 motor with built-in smart display', 'Expandable with satellite stations', 'Full stainless steel construction', 'Automatic pump and compressor activation'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'ms-0427',
      name: 'MS NEXT 0427',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'Heavy-duty mainstation supporting 4 simultaneous users. Built for medium to large food processing facilities with demanding cleaning requirements.',
      tags: ['4 Users', '27 Bar', '6 kW'],
      specs: [
        { label: 'Users', value: '4 simultaneous' },
        { label: 'Max Flow', value: '120 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6 kW' },
        { label: 'Chemicals', value: '3 through single outlet' }
      ],
      features: ['Grundfos IE5 motor with built-in smart display', 'Full stainless steel construction', 'Automatic pump and compressor activation', 'Built-in diagnostics and fault detection'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'ms-0627',
      name: 'MS NEXT 0627',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'High-capacity mainstation for large-scale facilities. Supports 6 simultaneous users with extensive satellite network capability.',
      tags: ['6 Users', '27 Bar', '7.5 kW'],
      specs: [
        { label: 'Users', value: '6 simultaneous' },
        { label: 'Max Flow', value: '200 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '7.5 kW' },
        { label: 'Chemicals', value: '3 through single outlet' }
      ],
      features: ['Grundfos IE5 motor with built-in smart display', 'Supports extensive satellite networks', 'Full stainless steel construction', 'Engineered for 24/7 industrial use'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'ms-0927',
      name: 'MS NEXT 0927',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'Maximum-capacity mainstation supporting 9 simultaneous users. The flagship heavy-duty unit for the largest food processing operations.',
      tags: ['9 Users', '27 Bar', '11 kW'],
      specs: [
        { label: 'Users', value: '9 simultaneous' },
        { label: 'Max Flow', value: '270 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '11 kW' },
        { label: 'Chemicals', value: '3 through single outlet' }
      ],
      features: ['Grundfos IE5 motor with built-in smart display', 'Single handle controls 4 cleaning steps', 'Automatic compressor and pump activation', 'Full stainless steel construction', 'Built-in diagnostics and fault detection'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'ms-0227-2b',
      name: 'MS NEXT 0227-2B',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'Dual Block mainstation \u2014 each of 2 users gets independent 3-chemical access through their own block and outlet.',
      tags: ['2 Users', '27 Bar', 'Dual Block'],
      specs: [
        { label: 'Users', value: '2 simultaneous' },
        { label: 'Max Flow', value: '60 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '3 kW' },
        { label: 'Configuration', value: 'Dual Block (independent chemical access)' }
      ],
      features: ['Dual Block \u2014 each user gets independent 3-chemical access', 'Grundfos IE5 motor with built-in smart display', 'Colour-coded controls per block', 'Integrated high-quality mixing chamber', 'Full stainless steel construction'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'ms-0427-2b',
      name: 'MS NEXT 0427-2B',
      category: 'mainstations',
      subsection: 'heavy-duty-27bar',
      layout: 'expandable',
      description: 'Dual Block mainstation supporting 4 simultaneous users with independent chemical access per block.',
      tags: ['4 Users', '27 Bar', 'Dual Block'],
      specs: [
        { label: 'Users', value: '4 simultaneous' },
        { label: 'Max Flow', value: '120 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6 kW' },
        { label: 'Configuration', value: 'Dual Block (independent chemical access)' }
      ],
      features: ['Dual Block \u2014 independent 3-chemical access per user group', 'Grundfos IE5 motor with built-in smart display', 'Colour-coded interface per block', 'Integrated mixing chamber', 'Full stainless steel construction'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },

    // ========== SATELLITES - Next Series ==========
    {
      id: 'su-0127-next',
      name: 'SU 0127 Next',
      category: 'satellites',
      subsection: 'next-series',
      layout: 'expandable',
      description: 'FOAMICO\'s most efficient cleaning technology (since 2011). The sole system on the market capable of using three chemicals and rinsing through a single outlet without additional valves.',
      tags: ['10\u201327 Bar', 'NEXT Technology', '3 Chemicals + Rinse'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Max Flow', value: '100 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '5\u201310 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Outlets', value: '1 (3 chemicals + rinse)' }
      ],
      features: ['Single-handle for 4 cleaning steps \u2014 mechanical changeover, no additional valves', 'Optimised block design with built-in mixing chamber', 'Reduces pressure loss significantly vs. conventional equipment', 'Full stainless steel construction with colour-coded interface', 'Low water and chemical consumption'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },
    {
      id: 'su-0150-next',
      name: 'SU 0150 Next',
      category: 'satellites',
      subsection: 'next-series',
      layout: 'expandable',
      description: 'Higher-pressure variant of the Next satellite supporting up to 50 bar inlet. For heavy-duty industrial applications requiring maximum cleaning pressure.',
      tags: ['10\u201350 Bar', 'NEXT Technology', 'High Pressure'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '10\u201350 bar' },
        { label: 'Max Flow', value: '100 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '5\u201310 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Outlets', value: '1 (3 cleaning steps)' }
      ],
      features: ['Single handle, one outlet for 3 cleaning steps', 'Full stainless steel construction', 'Optimised mixing chamber for foam quality', 'Automatic pump and compressor engagement', 'Supports higher-pressure booster systems up to 50 bar'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },
    {
      id: 'su-0127-next-mobile',
      name: 'SU 0127 Next Mobile',
      category: 'satellites',
      subsection: 'next-series',
      layout: 'expandable',
      description: 'Mobile trolley-mounted version of the Next satellite with integrated can and nozzle holder. Full NEXT technology in a portable configuration.',
      tags: ['10\u201327 Bar', 'Mobile Trolley', 'NEXT Technology'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Max Flow', value: '100 L/min' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '5\u201310 bar' },
        { label: 'Outlets', value: '1 (3 chemicals + rinse)' }
      ],
      features: ['Mobile trolley with integrated can and nozzle holder', 'Single-handle for 4 cleaning steps', 'Full NEXT technology in portable form', 'Stainless steel construction with colour-coded interface', 'Connects to mainstation or booster'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },

    // ========== SATELLITES - Light Series ==========
    {
      id: 'su-0127-light',
      name: 'SU 0127 Light',
      category: 'satellites',
      subsection: 'light-series',
      layout: 'expandable',
      description: 'Simplified satellite with 2 functions only: Rinse and Foam/Spray. Smart, minimalistic design with an easily maintainable manual changeover block.',
      tags: ['10\u201327 Bar', '2 Functions', 'Rinse + Foam'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '5\u201310 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Functions', value: 'Rinse + Foam/Spray' }
      ],
      features: ['2 functions only \u2014 Rinse and Foam/Spray for simplicity', 'Easily maintainable manual changeover block', 'Stainless steel handle and high-grade construction', 'Colour-coded for intuitive operation', 'Minimalistic, space-efficient design'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },
    {
      id: 'su-0110-light-twp',
      name: 'SU 0110 Light TWP',
      category: 'satellites',
      subsection: 'light-series',
      layout: 'expandable',
      description: 'Compact satellite for direct connection to water mains (tap water pressure). No mainstation or booster required \u2014 connect directly to your existing water supply.',
      tags: ['2\u201310 Bar', 'Tap Water Pressure', 'No Booster Needed'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '2\u201310 bar (tap water)' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '2\u201310 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Functions', value: 'Rinse + Foam/Spray Disinfection' }
      ],
      features: ['Connects directly to water mains \u2014 no mainstation or booster needed', 'Manual changeover block for simple operation', 'Stainless steel construction', 'Smart, minimalistic design', 'Colour-coded interface'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },
    {
      id: 'su-0110-light-twp-xa',
      name: 'SU 0110 Light TWP XA',
      category: 'satellites',
      subsection: 'light-series',
      layout: 'expandable',
      description: 'Tap water pressure satellite with Turbo Foam Nozzle technology \u2014 produces quality foam without compressed air. Ideal for locations without air supply.',
      tags: ['2\u201310 Bar', 'Tap Water', 'No Compressed Air'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '2\u201310 bar (tap water)' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Compressed Air', value: 'Not required' },
        { label: 'Functions', value: 'Rinse + Foam/Spray Disinfection' }
      ],
      features: ['Turbo Foam Nozzle technology \u2014 quality foam without compressed air', 'Direct water mains connection, no booster needed', 'No air supply infrastructure required', 'Manual changeover block', 'Stainless steel construction with colour-coded interface'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },
    {
      id: 'su-0127-light-mobile',
      name: 'SU 0127 Light Mobile',
      category: 'satellites',
      subsection: 'light-series',
      layout: 'expandable',
      description: 'Portable version of the Light satellite on a trolley. 2-function operation (Rinse + Foam/Spray) with full mobility.',
      tags: ['10\u201327 Bar', 'Mobile Trolley', '2 Functions'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '5\u201310 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Functions', value: 'Rinse + Foam/Spray' }
      ],
      features: ['Portable trolley for flexible deployment', '2 functions \u2014 Rinse and Foam/Spray', 'Connects to mainstation or booster', 'Stainless steel construction', 'Colour-coded, minimalistic design'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },

    // ========== SATELLITES - Baseline Series ==========
    {
      id: 'su-0127-baseline',
      name: 'SU 0127 Baseline',
      category: 'satellites',
      subsection: 'baseline-series',
      layout: 'expandable',
      description: 'Entry-level satellite with 2 chemical injections through one outlet plus rinse. Single handle for on/off and chemical switching.',
      tags: ['10\u201327 Bar', '2 Chemicals + Rinse', 'Entry Level'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '5\u201310 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Outlets', value: '1 (2 chemicals + rinse)' }
      ],
      features: ['Single handle for on/off and chemical switching', '2 chemicals + rinse through one outlet', 'No separate air on/off switch required', 'Colour-coded stainless steel construction', 'Reliable entry-level FOAMICO cleaning'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },
    {
      id: 'su-0127-baseline-mobile',
      name: 'SU 0127 Baseline Mobile',
      category: 'satellites',
      subsection: 'baseline-series',
      layout: 'expandable',
      description: 'Portable version of the Baseline satellite on a mobile trolley. Same reliable 2-chemical + rinse functionality with full mobility.',
      tags: ['10\u201327 Bar', 'Mobile Trolley', 'Entry Level'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pipe', value: '1/2"' },
        { label: 'Air Supply', value: '5\u201310 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Configuration', value: 'Mobile trolley' }
      ],
      features: ['Mobile trolley for flexible deployment', '2 chemicals + rinse through single outlet', 'Single-handle operation', 'Full stainless steel construction', 'Connects to mainstation or booster'],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
        bgColor: '#EFF6FF',
        color: '#3b82f6'
      }
    },

    // ========== BOOSTERS - Single Pump 27 Bar ==========
    {
      id: 'b050-27', name: 'B050-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'expandable',
      description: 'Entry-level single pump booster for 1 simultaneous user. Provides satellite workstations with pressurised water at up to 27 bar. Dynamic outlet pressure adapts to user count and inlet pressure.',
      tags: ['1 User', '27 Bar', '2.2 kW'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2.2 kW' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b065-27', name: 'B065-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'expandable',
      description: 'Single pump booster for 2 simultaneous users. Provides satellite workstations with pressurised water at up to 27 bar with dynamic outlet pressure.',
      tags: ['2 Users', '27 Bar', '3.0 kW'],
      specs: [
        { label: 'Users', value: '2 simultaneous' },
        { label: 'Max Flow', value: '65 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '3.0 kW' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b100-27', name: 'B100-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'expandable',
      description: 'Single pump booster for 3 simultaneous users. Ideal for small to mid-size facilities needing reliable pressurised water supply to satellite workstations.',
      tags: ['3 Users', '27 Bar', '4.0 kW'],
      specs: [
        { label: 'Users', value: '3 simultaneous' },
        { label: 'Max Flow', value: '100 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '4.0 kW' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b120-27', name: 'B120-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'expandable',
      description: 'Single pump booster for 4 simultaneous users. Well-suited for mid-size food processing facilities with multiple cleaning zones.',
      tags: ['4 Users', '27 Bar', '6.0 kW'],
      specs: [
        { label: 'Users', value: '4 simultaneous' },
        { label: 'Max Flow', value: '120 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6.0 kW' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b200-27', name: 'B200-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'expandable',
      description: 'High-capacity single pump booster for 6 simultaneous users. Designed for larger facilities requiring substantial flow to multiple satellite workstations.',
      tags: ['6 Users', '27 Bar', '7.5 kW'],
      specs: [
        { label: 'Users', value: '6 simultaneous' },
        { label: 'Max Flow', value: '200 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '7.5 kW' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b270-27', name: 'B270-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'expandable',
      description: 'Maximum-capacity single pump booster for 9 simultaneous users. The largest single pump unit in the 27 bar range, built for demanding industrial environments.',
      tags: ['9 Users', '27 Bar', '11 kW'],
      specs: [
        { label: 'Users', value: '9 simultaneous' },
        { label: 'Max Flow', value: '270 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '11 kW' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },

    // ========== BOOSTERS - Multi Pump 27 Bar ==========
    {
      id: 'b400-27', name: 'B400-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'expandable',
      description: 'Multi-pump booster for 12 simultaneous users. Dual pump architecture provides full redundancy \u2014 if one pump fails, the other continues operating.',
      tags: ['12 Users', '27 Bar', 'Dual Pump'],
      specs: [
        { label: 'Users', value: '12 simultaneous' },
        { label: 'Max Flow', value: '400 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2 \u00d7 7.5 kW (15 kW total)' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Dual Grundfos IE5 pumps with automatic load distribution', 'Full pump redundancy \u2014 continuous operation if one pump fails', 'Smart display showing operational data and alarm descriptions', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b540-27', name: 'B540-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'expandable',
      description: 'Multi-pump booster for 18 simultaneous users. Dual pump architecture with automatic load distribution for even wear and full redundancy.',
      tags: ['18 Users', '27 Bar', 'Dual Pump'],
      specs: [
        { label: 'Users', value: '18 simultaneous' },
        { label: 'Max Flow', value: '540 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2 \u00d7 11 kW (22 kW total)' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Dual Grundfos IE5 pumps with automatic load distribution', 'Full pump redundancy \u2014 continuous operation if one pump fails', 'Smart display showing operational data and alarm descriptions', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b630-27', name: 'B630-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'expandable',
      description: 'Multi-pump booster for 21 simultaneous users. Dual pump architecture for high-flow demand across large-scale food processing operations.',
      tags: ['21 Users', '27 Bar', 'Dual Pump'],
      specs: [
        { label: 'Users', value: '21 simultaneous' },
        { label: 'Max Flow', value: '630 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2 \u00d7 11 kW (22 kW total)' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Dual Grundfos IE5 pumps with automatic load distribution', 'Full pump redundancy \u2014 continuous operation if one pump fails', 'Smart display showing operational data and alarm descriptions', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b810-27', name: 'B810-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'expandable',
      description: 'High-capacity multi-pump booster for 27 simultaneous users. Triple pump architecture with full redundancy and automatic load distribution.',
      tags: ['27 Users', '27 Bar', 'Triple Pump'],
      specs: [
        { label: 'Users', value: '27 simultaneous' },
        { label: 'Max Flow', value: '810 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '3 \u00d7 11 kW (33 kW total)' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Triple Grundfos IE5 pumps with automatic load distribution', 'Full pump redundancy \u2014 continuous operation if one pump fails', 'Smart display showing operational data and alarm descriptions', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },
    {
      id: 'b1080-27', name: 'B1080-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'expandable',
      description: 'Maximum-capacity multi-pump booster for 36 simultaneous users. Quad pump architecture \u2014 the flagship booster for the largest food processing facilities.',
      tags: ['36 Users', '27 Bar', 'Quad Pump'],
      specs: [
        { label: 'Users', value: '36 simultaneous' },
        { label: 'Max Flow', value: '1,080 L/min' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '4 \u00d7 11 kW (44 kW total)' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Quad Grundfos IE5 pumps with automatic load distribution', 'Full pump redundancy \u2014 continuous operation if any pump fails', 'Smart display showing operational data and alarm descriptions', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#F0FDF4', color: '#22c55e' }
    },

    // ========== BOOSTERS - High Pressure 40/45 Bar ==========
    {
      id: 'b060-45', name: 'B060-45', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'expandable',
      description: 'High-pressure single pump booster delivering 45 bar for maximum cleaning power. Designed for demanding applications requiring higher outlet pressure.',
      tags: ['1 User', '45 Bar', '6 kW'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Max Flow', value: '60 L/min' },
        { label: 'Pump Pressure', value: '45 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', '45 bar outlet pressure for maximum cleaning power', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#FEF2F2', color: '#dc2626' }
    },
    {
      id: 'b090-40', name: 'B090-40', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'expandable',
      description: 'High-pressure booster for 2 simultaneous users at 40 bar. Suited for tougher cleaning tasks, longer pipe runs, or when more force is required at the nozzle.',
      tags: ['2 Users', '40 Bar', '6 kW'],
      specs: [
        { label: 'Users', value: '2 simultaneous' },
        { label: 'Max Flow', value: '90 L/min' },
        { label: 'Pump Pressure', value: '40 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', '40 bar outlet pressure for enhanced cleaning performance', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#FEF2F2', color: '#dc2626' }
    },
    {
      id: 'b200-40', name: 'B200-40', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'expandable',
      description: 'High-pressure booster for 6 simultaneous users at 40 bar. Designed for large facilities requiring elevated cleaning pressure across multiple zones.',
      tags: ['6 Users', '40 Bar', '6 kW'],
      specs: [
        { label: 'Users', value: '6 simultaneous' },
        { label: 'Max Flow', value: '200 L/min' },
        { label: 'Pump Pressure', value: '40 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Grundfos IE5 energy-optimised motor with built-in smart display', '40 bar outlet pressure for enhanced cleaning performance', 'Dynamic outlet pressure adapts to user count and inlet pressure', 'Dry running protection and high liquid temperature alarm', 'Automatic air release valve', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#FEF2F2', color: '#dc2626' }
    },
    {
      id: 'b270-40', name: 'B270-40', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'expandable',
      description: 'Maximum-capacity high-pressure booster for 9 simultaneous users at 40 bar. Dual pump architecture for full redundancy at high pressure.',
      tags: ['9 Users', '40 Bar', 'Dual Pump'],
      specs: [
        { label: 'Users', value: '9 simultaneous' },
        { label: 'Max Flow', value: '270 L/min' },
        { label: 'Pump Pressure', value: '40 bar (at 7 bar inlet)' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2 \u00d7 11 kW (22 kW total)' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: ['Dual Grundfos IE5 pumps with automatic load distribution', 'Full pump redundancy \u2014 continuous operation if one pump fails', '40 bar outlet pressure for maximum high-pressure cleaning', 'Smart display showing operational data and alarm descriptions', 'Dry running protection and high liquid temperature alarm', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#FEF2F2', color: '#dc2626' }
    },

    // ========== BOOSTERS - Pre-Pressure ==========
    {
      id: 'b120-5', name: 'B120-5F', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'expandable',
      description: 'Frequency-controlled pre-pressure booster that supplies adequate inlet water pressure to main booster units. Required when facility water supply is below 2 bar.',
      tags: ['120 L/min', '5 Bar', 'Frequency Controlled'],
      specs: [
        { label: 'Max Flow', value: '120 L/min' },
        { label: 'Outlet Pressure', value: '5 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '3 kW' },
        { label: 'Control', value: 'Frequency-controlled with built-in PI regulator' }
      ],
      features: ['Frequency-controlled pump operation for energy-efficient pressure control', 'Built-in PI regulator minimises energy consumption by matching output to demand', 'Pressure-based start/stop \u2014 activates automatically when main booster draws water', 'Grundfos IE5 motor technology', 'Smart display showing operational data and alarm codes', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },
    {
      id: 'b270-3', name: 'B270-3F', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'expandable',
      description: 'Frequency-controlled pre-pressure booster for mid-capacity main boosters. Supplies consistent inlet pressure for B270-27 and similar units.',
      tags: ['270 L/min', '3 Bar', 'Frequency Controlled'],
      specs: [
        { label: 'Max Flow', value: '270 L/min' },
        { label: 'Outlet Pressure', value: '3 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '3 kW' },
        { label: 'Control', value: 'Frequency-controlled with built-in PI regulator' }
      ],
      features: ['Frequency-controlled pump operation for energy-efficient pressure control', 'Built-in PI regulator minimises energy consumption', 'Pressure-based start/stop \u2014 activates automatically when main booster draws water', 'Grundfos IE5 motor technology', 'Smart display showing operational data and alarm codes', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },
    {
      id: 'b630-3', name: 'B630-3F', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'expandable',
      description: 'Frequency-controlled pre-pressure booster for high-capacity main boosters. Supplies consistent inlet pressure for B630-27 and similar units.',
      tags: ['630 L/min', '3 Bar', 'Frequency Controlled'],
      specs: [
        { label: 'Max Flow', value: '630 L/min' },
        { label: 'Outlet Pressure', value: '3 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '5.5 kW' },
        { label: 'Control', value: 'Frequency-controlled with built-in PI regulator' }
      ],
      features: ['Frequency-controlled pump operation for energy-efficient pressure control', 'Built-in PI regulator minimises energy consumption', 'Pressure-based start/stop \u2014 activates automatically when main booster draws water', 'Grundfos IE5 motor technology', 'Smart display showing operational data and alarm codes', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },
    {
      id: 'b810-3', name: 'B810-3F', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'expandable',
      description: 'Frequency-controlled pre-pressure booster for large-scale main boosters. Supplies consistent inlet pressure for B810-27 and similar units.',
      tags: ['810 L/min', '3 Bar', 'Frequency Controlled'],
      specs: [
        { label: 'Max Flow', value: '810 L/min' },
        { label: 'Outlet Pressure', value: '3 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '7.5 kW' },
        { label: 'Control', value: 'Frequency-controlled with built-in PI regulator' }
      ],
      features: ['Frequency-controlled pump operation for energy-efficient pressure control', 'Built-in PI regulator minimises energy consumption', 'Pressure-based start/stop \u2014 activates automatically when main booster draws water', 'Grundfos IE5 motor technology', 'Smart display showing operational data and alarm codes', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },
    {
      id: 'b1080-3', name: 'B1080-3F', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'expandable',
      description: 'Maximum-capacity frequency-controlled pre-pressure booster. Supplies consistent inlet pressure for B1080-27 and the largest booster configurations.',
      tags: ['1,080 L/min', '3 Bar', 'Frequency Controlled'],
      specs: [
        { label: 'Max Flow', value: '1,080 L/min' },
        { label: 'Outlet Pressure', value: '3 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '11 kW' },
        { label: 'Control', value: 'Frequency-controlled with built-in PI regulator' }
      ],
      features: ['Frequency-controlled pump operation for energy-efficient pressure control', 'Built-in PI regulator minimises energy consumption', 'Pressure-based start/stop \u2014 activates automatically when main booster draws water', 'Grundfos IE5 motor technology', 'Smart display showing operational data and alarm codes', 'High-grade stainless steel construction'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },

    // ========== AUTOMATIC - AMS Series ==========
    {
      id: 'ams-300-150', name: 'AMS 300/150', category: 'automatic', subsection: 'ams-series', layout: 'expandable',
      description: 'Automatic mainstation with built-in pump for automated conveyor and facility cleaning. Reduces total cleaning time, labour, water, and chemical usage. One handle operates three cleaning steps through a single outlet.',
      tags: ['1 User', '300 L/min', 'Built-in Pump'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Max Flow', value: '300 L/min' },
        { label: 'Inlet Pressure', value: '3\u201310 bar' },
        { label: 'Inlet Pipe', value: '2"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Power', value: '6 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: [
        'One handle, one outlet for 3 automated cleaning steps \u2014 rinse, foam, disinfection',
        'Built-in pump \u2014 connects directly to mains water supply',
        'Reduces total cleaning time, physical labour, water and chemical usage',
        'Full stainless steel construction for maximum lifetime',
        'Optimised water flow reduces pressure loss for enhanced cleaning power',
        'Colour-coded interface for intuitive operation'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>', bgColor: '#F5F3FF', color: '#8b5cf6' }
    },
    {
      id: 'ams-300-300', name: 'AMS 300/300', category: 'automatic', subsection: 'ams-series', layout: 'expandable',
      description: 'Mid-range automatic mainstation with built-in pump and programmable cleaning cycles. Designed for automated conveyor and facility cleaning in food and beverage production environments.',
      tags: ['1 User', '300 L/min', 'Programmable'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Max Flow', value: '300 L/min' },
        { label: 'Inlet Pressure', value: '3\u201310 bar' },
        { label: 'Inlet Pipe', value: '2"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Power', value: '6 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: [
        'One handle, one outlet for 3 automated cleaning steps',
        'Built-in pump \u2014 connects directly to mains water supply',
        'Programmable cleaning cycles for consistent, repeatable results',
        'Reduces total cleaning time, physical labour, water and chemical usage',
        'Full stainless steel construction for maximum lifetime',
        'Colour-coded interface for intuitive operation'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>', bgColor: '#F5F3FF', color: '#8b5cf6' }
    },
    {
      id: 'ams-300-450', name: 'AMS 300/450', category: 'automatic', subsection: 'ams-series', layout: 'expandable',
      description: 'Highest capacity automatic mainstation in the AMS series with built-in pump. Designed for the most demanding automated cleaning requirements in large food processing facilities.',
      tags: ['1 User', '300 L/min', 'Max Capacity'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Max Flow', value: '300 L/min' },
        { label: 'Inlet Pressure', value: '3\u201310 bar' },
        { label: 'Inlet Pipe', value: '2"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Power', value: '6 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' }
      ],
      features: [
        'One handle, one outlet for 3 automated cleaning steps',
        'Built-in pump \u2014 connects directly to mains water supply',
        'Highest capacity configuration in the AMS mainstation series',
        'Reduces total cleaning time, physical labour, water and chemical usage',
        'Full stainless steel construction for maximum lifetime',
        'Colour-coded interface for intuitive operation'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>', bgColor: '#F5F3FF', color: '#8b5cf6' }
    },

    // ========== AUTOMATIC - ASU Series ==========
    {
      id: 'asu-450-150', name: 'ASU 450/150', category: 'automatic', subsection: 'asu-series', layout: 'expandable',
      description: 'Automated cleaning satellite without built-in pump. Receives pressurised water from a mainstation or booster. One handle operates three cleaning steps through a single outlet.',
      tags: ['450 L/min', '10\u201327 Bar', 'Satellite'],
      specs: [
        { label: 'Max Flow', value: '450 L/min' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Inlet Pipe', value: '1\u00bc"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Voltage', value: '1\u00d7 220V or 3\u00d7 380\u2013500V' },
        { label: 'Frequency', value: '50\u201360 Hz' }
      ],
      features: [
        'One handle, one outlet for 3 automated cleaning steps',
        'No built-in pump \u2014 connects to mainstation or booster for pressurised water',
        'Full stainless steel construction for durability in harsh environments',
        'Optimised water flow with reduced pressure loss',
        'Smart design with colour coding for intuitive operation',
        'Engineered for fast cleaning with less water usage'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },
    {
      id: 'asu-450-300', name: 'ASU 450/300', category: 'automatic', subsection: 'asu-series', layout: 'expandable',
      description: 'Mid-range automated cleaning satellite with programmable cleaning cycles. Receives pressurised water from a mainstation or booster for consistent, repeatable cleaning.',
      tags: ['450 L/min', '10\u201327 Bar', 'Programmable'],
      specs: [
        { label: 'Max Flow', value: '450 L/min' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Inlet Pipe', value: '1\u00bc"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Voltage', value: '1\u00d7 220V or 3\u00d7 380\u2013500V' },
        { label: 'Frequency', value: '50\u201360 Hz' }
      ],
      features: [
        'One handle, one outlet for 3 automated cleaning steps',
        'Programmable cleaning cycles for consistent, repeatable results',
        'No built-in pump \u2014 connects to mainstation or booster',
        'Full stainless steel construction for harsh environments',
        'Optimised water flow with reduced pressure loss',
        'Colour-coded interface for intuitive operation'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },
    {
      id: 'asu-450-450', name: 'ASU 450/450', category: 'automatic', subsection: 'asu-series', layout: 'expandable',
      description: 'Highest capacity automated cleaning satellite in the ASU series. Designed for the most demanding automated cleaning requirements in large food processing facilities.',
      tags: ['450 L/min', '10\u201327 Bar', 'Max Capacity'],
      specs: [
        { label: 'Max Flow', value: '450 L/min' },
        { label: 'Inlet Pressure', value: '10\u201327 bar' },
        { label: 'Inlet Pipe', value: '1\u00bc"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Voltage', value: '1\u00d7 220V or 3\u00d7 380\u2013500V' },
        { label: 'Frequency', value: '50\u201360 Hz' }
      ],
      features: [
        'One handle, one outlet for 3 automated cleaning steps',
        'Highest capacity configuration in the ASU satellite series',
        'No built-in pump \u2014 connects to mainstation or booster',
        'Full stainless steel construction for maximum durability',
        'Optimised water flow with reduced pressure loss',
        'Colour-coded interface for intuitive operation'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>', bgColor: '#EFF6FF', color: '#3b82f6' }
    },

    // ========== MOBILE - 27 Bar ==========
    {
      id: 'mo-0127',
      name: 'MO NEXT 0127',
      category: 'mobile',
      subsection: 'mobile-27bar',
      layout: 'expandable',
      description: 'Self-contained mobile cleaning station with built-in industrial compressor. Based on NEXT Technology, operates with 3 chemicals plus rinse through a single outlet. High-quality components ensure reliability and long lifetime with easy maintenance.',
      tags: ['1 User', '27 Bar', 'Built-in Compressor'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2.2 + 1.0 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' },
        { label: 'Chemicals', value: '3 (plus rinse) through single outlet' }
      ],
      features: [
        'One handle and one outlet for 3 cleaning steps \u2014 rinse, foam, disinfect',
        'Built-in industrial compressor \u2014 fully self-contained, no external air required',
        'Grundfos IE5 pump with smart display showing operational data and alarms',
        'Full stainless steel construction for maximum lifetime and reliability',
        'Optimised water flow reduces pressure loss for faster cleaning with less water',
        'Colour-coded interface for intuitive, error-free operation'
      ],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="2" width="14" height="16" rx="2"/><circle cx="9" cy="21" r="1.5"/><circle cx="15" cy="21" r="1.5"/><path d="M9 8h6M9 11h6"/></svg>',
        bgColor: '#F0FDFA',
        color: '#14b8a6'
      }
    },
    {
      id: 'mo-0227',
      name: 'MO NEXT 0227',
      category: 'mobile',
      subsection: 'mobile-27bar',
      layout: 'expandable',
      description: 'Self-contained mobile cleaning station with built-in industrial compressor supporting 2 simultaneous users. NEXT Technology with 3 chemicals plus rinse through a single outlet per user.',
      tags: ['2 Users', '27 Bar', 'Built-in Compressor'],
      specs: [
        { label: 'Users', value: '2 simultaneous' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Max Flow', value: '100 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '4.0 + 1.0 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' },
        { label: 'Chemicals', value: '3 (plus rinse) through single outlet' }
      ],
      features: [
        'One handle and one outlet per user for 3 cleaning steps',
        'Built-in industrial compressor \u2014 fully self-contained, no external air required',
        'Grundfos IE5 pump with smart display showing operational data and alarms',
        'Full stainless steel construction for maximum reliability',
        'Optimised water flow reduces pressure loss for efficient cleaning',
        'Colour-coded interface for ease of use across teams'
      ],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="2" width="14" height="16" rx="2"/><circle cx="9" cy="21" r="1.5"/><circle cx="15" cy="21" r="1.5"/><path d="M9 8h6M9 11h6"/></svg>',
        bgColor: '#F0FDFA',
        color: '#14b8a6'
      }
    },
    {
      id: 'mo-0127-xa',
      name: 'MO NEXT 0127 XA',
      category: 'mobile',
      subsection: 'mobile-27bar',
      layout: 'expandable',
      description: 'Mobile cleaning station without built-in compressor, designed for facilities with existing compressed air supply. NEXT Technology with 3 chemicals plus rinse through a single outlet.',
      tags: ['1 User', '27 Bar', 'No Compressor (XA)'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Max Flow', value: '50 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '2.2 + 1.0 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' },
        { label: 'Chemicals', value: '3 (plus rinse) through single outlet' }
      ],
      features: [
        'One handle and one outlet for 3 cleaning steps',
        'XA variant \u2014 without built-in compressor, connects to facility\u2019s existing air supply',
        'Grundfos IE5 pump with smart display showing operational data and alarms',
        'Full stainless steel construction for maximum lifetime',
        'Optimised water flow design reducing pressure loss',
        'Colour-coded interface for intuitive operation'
      ],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="2" width="14" height="16" rx="2"/><circle cx="9" cy="21" r="1.5"/><circle cx="15" cy="21" r="1.5"/><path d="M9 8h6M9 11h6"/></svg>',
        bgColor: '#F0FDFA',
        color: '#14b8a6'
      }
    },
    {
      id: 'mo-0227-xa',
      name: 'MO NEXT 0227 XA',
      category: 'mobile',
      subsection: 'mobile-27bar',
      layout: 'expandable',
      description: 'Mobile cleaning station without built-in compressor supporting 2 simultaneous users. For facilities with existing compressed air supply. NEXT Technology with 3 chemicals plus rinse.',
      tags: ['2 Users', '27 Bar', 'No Compressor (XA)'],
      specs: [
        { label: 'Users', value: '2 simultaneous' },
        { label: 'Pump Pressure', value: '27 bar (at 7 bar inlet)' },
        { label: 'Max Flow', value: '100 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '4.0 + 1.0 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' },
        { label: 'Chemicals', value: '3 (plus rinse) through single outlet' }
      ],
      features: [
        'One handle and one outlet per user for 3 cleaning steps',
        'XA variant \u2014 without built-in compressor, connects to facility\u2019s existing air supply',
        'Grundfos IE5 pump with smart display showing operational data and alarms',
        'Full stainless steel construction with high-quality materials',
        'Optimised water flow with reduced pressure loss',
        'Colour-coded interface for intuitive operation'
      ],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="2" width="14" height="16" rx="2"/><circle cx="9" cy="21" r="1.5"/><circle cx="15" cy="21" r="1.5"/><path d="M9 8h6M9 11h6"/></svg>',
        bgColor: '#F0FDFA',
        color: '#14b8a6'
      }
    },

    // ========== MOBILE - 45 Bar ==========
    {
      id: 'mo-0145',
      name: 'MO NEXT 0145',
      category: 'mobile',
      subsection: 'mobile-45bar',
      layout: 'expandable',
      description: 'High-pressure mobile cleaning station with built-in industrial compressor. NEXT Technology delivering 45 bar for maximum cleaning power in demanding environments. 3 chemicals plus rinse through a single outlet.',
      tags: ['1 User', '45 Bar', 'Built-in Compressor'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '45 bar (at 7 bar inlet)' },
        { label: 'Max Flow', value: '120 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6.0 + 1.0 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' },
        { label: 'Chemicals', value: '3 (plus rinse) through single outlet' }
      ],
      features: [
        'Single handle controls all 4 cleaning tasks \u2014 rinse + 3 chemicals',
        'Built-in industrial compressor \u2014 fully self-contained, no external air required',
        '45 bar high-pressure output for maximum cleaning power in demanding environments',
        'Full stainless steel high-grade construction',
        'Optimised water flow reduces pressure loss for faster cleaning with less water',
        'Colour-coded and intuitive design for easy operation',
        'Premium components ensure consistent long-term performance'
      ],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="2" width="14" height="16" rx="2"/><circle cx="9" cy="21" r="1.5"/><circle cx="15" cy="21" r="1.5"/><path d="M9 8h6M9 11h6"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },
    {
      id: 'mo-0145-xa',
      name: 'MO NEXT 0145 XA',
      category: 'mobile',
      subsection: 'mobile-45bar',
      layout: 'expandable',
      description: 'High-pressure mobile cleaning station without built-in compressor. NEXT Technology with 45 bar for maximum cleaning power, designed for facilities with existing compressed air supply.',
      tags: ['1 User', '45 Bar', 'No Compressor (XA)'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Pump Pressure', value: '45 bar (at 7 bar inlet)' },
        { label: 'Max Flow', value: '120 L/min' },
        { label: 'Inlet Pressure', value: '2\u201310 bar' },
        { label: 'Max Temp', value: '70\u00b0C' },
        { label: 'Power', value: '6.0 kW' },
        { label: 'Voltage', value: '380\u2013500 V, 50\u201360 Hz' },
        { label: 'Chemicals', value: '3 (plus rinse) through single outlet' }
      ],
      features: [
        'One handle and one outlet for 3 cleaning steps',
        'XA variant \u2014 without built-in compressor, connects to facility\u2019s existing air supply',
        '45 bar high-pressure output for maximum cleaning power',
        'Full stainless steel construction',
        'Optimised water flow reducing pressure loss',
        'Colour-coded for intuitive operation',
        'Easy maintenance with high-quality materials'
      ],
      visual: {
        svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="2" width="14" height="16" rx="2"/><circle cx="9" cy="21" r="1.5"/><circle cx="15" cy="21" r="1.5"/><path d="M9 8h6M9 11h6"/></svg>',
        bgColor: '#FEF2F2',
        color: '#dc2626'
      }
    },

    // ========== PREDILUTED - Satellites ==========
    {
      id: 'psu-0127-pb2-fd', name: 'PSU 0127-PB2-FD', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'expandable',
      description: 'Prediluted satellite for pre-diluted chemicals. Connects to FOAMICO mixing stations and a booster. 2 chemicals in a single block with one outlet providing rinse, foam, and disinfection (spray mode).',
      tags: ['2 Chemicals', 'Spray Disinfection', '60 L/min'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '5\u201327 bar' },
        { label: 'Max Flow', value: '60 L/min' },
        { label: 'Inlet Pipe', value: '\u00bd"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Chemicals', value: '2 in single block' },
        { label: 'Functions', value: 'Rinse, Foam, Disinfection (Spray)' }
      ],
      features: [
        '3 cleaning functions: rinsing, foaming, disinfection (spray mode)',
        'Users never handle concentrated chemicals \u2014 maximum safety in production areas',
        'Smart colour coding for intuitive, error-free operation',
        'High-grade stainless steel construction for harsh environments',
        'Reduced pressure loss delivers more cleaning power at the nozzle',
        'Every unit tested before shipment'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },
    {
      id: 'psu-0127-pb2-ff', name: 'PSU 0127-PB2-FF', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'expandable',
      description: 'Prediluted satellite for pre-diluted chemicals. 2 chemicals in a single block with one outlet providing rinse, foam, and disinfection (foam mode). Ideal when foam-based disinfection is preferred.',
      tags: ['2 Chemicals', 'Foam Disinfection', '60 L/min'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '5\u201327 bar' },
        { label: 'Max Flow', value: '60 L/min' },
        { label: 'Inlet Pipe', value: '\u00bd"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Chemicals', value: '2 in single block' },
        { label: 'Functions', value: 'Rinse, Foam, Disinfection (Foam)' }
      ],
      features: [
        '3 cleaning functions: rinsing, foaming, disinfection (foam mode)',
        'Only one handle to change between 4 different cleaning tasks',
        'Users never handle concentrated chemicals \u2014 maximum safety',
        'Smart colour coding for intuitive operation',
        'High-grade stainless steel construction',
        'Pre-tested before shipping for quality assurance'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },
    {
      id: 'psu-0127-pb2-fd-lb-f', name: 'PSU 0127-PB2-FD + LB-F', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'expandable',
      description: 'Prediluted satellite with additional local injector. 3 chemicals in a single block with one outlet providing rinse, foam, disinfection (spray), and a separate local injector (spray).',
      tags: ['3 Chemicals', 'Spray + Local Injector', '60 L/min'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '5\u201327 bar' },
        { label: 'Max Flow', value: '60 L/min' },
        { label: 'Inlet Pipe', value: '\u00bd"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Chemicals', value: '3 in single block' },
        { label: 'Functions', value: 'Rinse, Foam, Disinfection (Spray), Local Injector (Spray)' }
      ],
      features: [
        '4 cleaning functions including separate local injector for additional chemical',
        'Users never handle concentrated chemicals \u2014 maximum safety in production areas',
        'Smart colour coding for intuitive operation',
        'High-grade stainless steel construction',
        'Pre-function tested before shipment',
        'Long-lifetime design reducing environmental impact'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },
    {
      id: 'psu-0127-pb2-ff-lb-f', name: 'PSU 0127-PB2-FF + LB-F', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'expandable',
      description: 'Prediluted satellite with additional local injector. 3 chemicals in a single block providing rinse, foam, disinfection (foam), and a separate local injector (spray). Maximum chemical versatility.',
      tags: ['3 Chemicals', 'Foam + Local Injector', '60 L/min'],
      specs: [
        { label: 'Users', value: '1 simultaneous' },
        { label: 'Inlet Pressure', value: '5\u201327 bar' },
        { label: 'Max Flow', value: '60 L/min' },
        { label: 'Inlet Pipe', value: '\u00bd"' },
        { label: 'Air Supply', value: '5/10 bar' },
        { label: 'Air Consumption', value: '150\u2013200 L/min' },
        { label: 'Chemicals', value: '3 in single block' },
        { label: 'Functions', value: 'Rinse, Foam, Disinfection (Foam), Local Injector (Spray)' }
      ],
      features: [
        '4 cleaning functions \u2014 foam-based disinfection with separate local injector',
        'Single-handle operation between all cleaning tasks',
        'Users never handle concentrated chemicals \u2014 maximum safety',
        'Smart colour coding for intuitive operation',
        'High-grade stainless steel construction',
        'Pre-function tested before shipment'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },

    // ========== PREDILUTED - Mixing Stations ==========
    {
      id: 'bd-40-10f', name: 'B-D 40-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'expandable',
      description: 'Prediluted mixing station that combines concentrated chemicals with water via an injector system to a predetermined concentration. Mixed solution stored in tank and pumped to prediluted satellites.',
      tags: ['1\u20135 Users', '40 L/min', '10 Bar'],
      specs: [
        { label: 'Users', value: '1\u20135 simultaneous' },
        { label: 'Max Flow', value: '40 L/min' },
        { label: 'Outlet Pressure', value: '10 bar (at 4 bar inlet)' },
        { label: 'Auto Pressure', value: 'Up to 8 bar' },
        { label: 'Power', value: '3.0 kW' },
        { label: 'Inlet Connection', value: '1\u00bc"' },
        { label: 'Pump', value: 'Grundfos IE5 with frequency control' }
      ],
      features: [
        'Grundfos IE5 pump \u2014 most efficient pump technology available',
        'Built-in PI regulator for energy-efficient pressure control',
        'Eliminates concentrated chemicals from production areas \u2014 maximum worker safety',
        'Storage tank with level switches for automatic filling',
        'Dry running protection and overflow protection',
        'Smart display showing operational data and alarm descriptions'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },
    {
      id: 'bd-80-10f', name: 'B-D 80-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'expandable',
      description: 'Mid-capacity prediluted mixing station. Same architecture as B-D 40-10F but scaled for up to 10 simultaneous users at 80 L/min. Grundfos IE5 frequency-controlled boosting unit.',
      tags: ['1\u201310 Users', '80 L/min', '10 Bar'],
      specs: [
        { label: 'Users', value: '1\u201310 simultaneous' },
        { label: 'Max Flow', value: '80 L/min' },
        { label: 'Outlet Pressure', value: '10 bar (at 4 bar inlet)' },
        { label: 'Auto Pressure', value: 'Up to 8 bar' },
        { label: 'Power', value: '3.0 kW' },
        { label: 'Inlet Connection', value: '1\u00bc"' },
        { label: 'Pump', value: 'Grundfos IE5 with frequency control' }
      ],
      features: [
        'Grundfos IE5 pump with frequency control',
        'Built-in PI regulator for energy-efficient pressure control',
        'Eliminates concentrated chemicals from production areas',
        'Storage tank with level switches for automatic filling',
        'Dry running protection and overflow protection',
        'Smart display showing operational data and alarm descriptions'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },
    {
      id: 'bd-120-10f', name: 'B-D 120-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'expandable',
      description: 'High-capacity prediluted mixing station for medium to large facilities. Supports up to 15 simultaneous users at 120 L/min with automatic pressure monitoring and PI regulation.',
      tags: ['1\u201315 Users', '120 L/min', '10 Bar'],
      specs: [
        { label: 'Users', value: '1\u201315 simultaneous' },
        { label: 'Max Flow', value: '120 L/min' },
        { label: 'Outlet Pressure', value: '10 bar (at 4 bar inlet)' },
        { label: 'Auto Pressure', value: 'Up to 8 bar' },
        { label: 'Power', value: '3.0 kW' },
        { label: 'Inlet Connection', value: '1\u00bc"' },
        { label: 'Pump', value: 'Grundfos IE5 with frequency control' }
      ],
      features: [
        'Grundfos IE5 pump with frequency control',
        'Built-in PI regulator for energy-efficient pressure control',
        'Eliminates concentrated chemicals from production areas',
        'Storage tank with level switches for automatic filling',
        'Dry running protection and overflow protection',
        'Smart display showing operational data and alarm descriptions'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },
    {
      id: 'bd-240-10f', name: 'B-D 240-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'expandable',
      description: 'Largest prediluted mixing station in the B-D series. Designed for the biggest food processing facilities with up to 25 simultaneous users at 240 L/min. Features a larger 1\u00bd" inlet connection.',
      tags: ['1\u201325 Users', '240 L/min', '10 Bar'],
      specs: [
        { label: 'Users', value: '1\u201325 simultaneous' },
        { label: 'Max Flow', value: '240 L/min' },
        { label: 'Outlet Pressure', value: '10 bar (at 4 bar inlet)' },
        { label: 'Auto Pressure', value: 'Up to 8 bar' },
        { label: 'Power', value: '3.0 kW' },
        { label: 'Inlet Connection', value: '1\u00bd"' },
        { label: 'Pump', value: 'Grundfos IE5 with frequency control' }
      ],
      features: [
        'Grundfos IE5 pump with frequency control \u2014 most efficient available',
        'Largest capacity: supports up to 25 simultaneous users',
        'Larger 1\u00bd" inlet for high-volume water supply',
        'Eliminates concentrated chemicals from production areas',
        'Storage tank with level switches for automatic filling',
        'Smart display showing operational data and alarm descriptions'
      ],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>', bgColor: '#FFFBEB', color: '#f59e0b' }
    },

    // ========== ACCESSORIES - Hoses & Fittings ==========
    {
      id: 'acc-hoses', name: 'FOAMICO Hoses', category: 'accessories', subsection: 'hoses-fittings', layout: 'expandable',
      description: 'Genuine FOAMICO PVC hoses with polyester yarn reinforcement. Designed for reliable operation in food and beverage production environments.',
      tags: ['PVC', 'Reinforced', '\u00bd" Thread'],
      specs: [
        { label: 'Material', value: 'PVC with polyester yarn reinforcement' },
        { label: 'Operating Temp', value: '\u22125\u00b0C to 60\u00b0C' },
        { label: 'Couplings', value: 'Stainless steel press couplings (\u00bd" outer thread)' },
        { label: 'Compatibility', value: 'All FOAMICO satellites and mainstations' }
      ],
      features: ['Polyester yarn reinforcement for burst resistance and durability', 'Stainless steel press couplings for secure, leak-free connections', 'Wide operating temperature range for versatile use', 'Food-safe materials compliant with hygiene standards'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-hose-fittings', name: 'Hose Fittings', category: 'accessories', subsection: 'hoses-fittings', layout: 'expandable',
      description: 'High-quality connectors for secure hose connections throughout your FOAMICO cleaning system. Available in stainless steel and galvanised options.',
      tags: ['Stainless Steel', 'Galvanised', 'Connectors'],
      specs: [
        { label: 'Materials', value: 'Stainless steel or galvanised' },
        { label: 'Types', value: 'Quick-connect, threaded, press fittings' },
        { label: 'Compatibility', value: 'All FOAMICO hose sizes' }
      ],
      features: ['Stainless steel and galvanised options for corrosion resistance', 'Secure, leak-free connections in high-pressure environments', 'Quick-connect options for fast hose changes', 'Compatible with all FOAMICO hose diameters'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-inlet-hoses', name: 'Inlet Hoses for Mobile Units', category: 'accessories', subsection: 'hoses-fittings', layout: 'expandable',
      description: 'Flexible connection hoses specifically designed for FOAMICO mobile stations. Quick-connect to water supply for fast setup and relocation.',
      tags: ['\u00be" Diameter', '2.5m / 5m', 'Mobile Units'],
      specs: [
        { label: 'Diameter', value: '\u00be"' },
        { label: 'Lengths', value: '2.5m or 5m' },
        { label: 'Compatibility', value: 'All MO NEXT mobile stations' }
      ],
      features: ['Designed specifically for mobile station inlet connections', 'Available in 2.5m or 5m lengths for flexible placement', 'Quick-connect fittings for fast setup', 'Durable construction for frequent connection/disconnection cycles'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-chemical-hoses', name: 'Chemical Suction Hoses', category: 'accessories', subsection: 'hoses-fittings', layout: 'expandable',
      description: 'Colour-coded chemical suction hoses with highly durable construction. Colour system enables quick identification of chemical lines for safety and compliance.',
      tags: ['Colour-Coded', 'Chemical Resistant', 'Durable'],
      specs: [
        { label: 'Construction', value: 'Highly durable, chemical-resistant' },
        { label: 'Identification', value: 'Colour-coded for each chemical line' },
        { label: 'Compatibility', value: 'All FOAMICO stations with chemical injection' }
      ],
      features: ['Colour-coded for instant chemical line identification', 'Chemical-resistant construction for long service life', 'Prevents cross-contamination between chemical lines', 'Durable materials for demanding production environments'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-hose-reels', name: 'Stainless Steel Hose Reels', category: 'accessories', subsection: 'hoses-fittings', layout: 'expandable',
      description: 'Hose storage and management reels in stainless steel. Keep cleaning areas tidy and extend hose lifetime by preventing kinks and damage.',
      tags: ['Stainless Steel', 'Wall Mount', 'Swivelling'],
      specs: [
        { label: 'Material', value: 'Stainless steel' },
        { label: 'Options', value: 'With or without swivelling brackets' },
        { label: 'Mounting', value: 'Wall-mounted' }
      ],
      features: ['Stainless steel construction for hygiene and durability', 'Swivelling bracket option for flexible hose direction', 'Keeps cleaning areas organised and hazard-free', 'Extends hose lifetime by preventing kinks and floor damage'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },

    // ========== ACCESSORIES - Nozzles & Lances ==========
    {
      id: 'acc-rinsing-nozzles', name: 'Rinsing & Foam Nozzles', category: 'accessories', subsection: 'nozzles-lances', layout: 'expandable',
      description: 'Precision rinsing and foam nozzles in stainless steel and brass. Model numbers encode spray angle and water consumption for easy selection.',
      tags: ['Stainless Steel', 'Brass', 'Precision'],
      specs: [
        { label: 'Materials', value: 'Stainless steel and brass options' },
        { label: 'Coding', value: 'First 2 digits = spray angle, last 2 = water consumption/min' },
        { label: 'Types', value: 'Rinsing nozzles, foam nozzles' }
      ],
      features: ['Precision-engineered spray patterns for optimal coverage', 'Model number coding for easy selection: angle + flow rate', 'Stainless steel and brass for corrosion resistance', 'Multiple spray angles available for different applications'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-turbo-foam', name: 'Turbo Foam Nozzle', category: 'accessories', subsection: 'nozzles-lances', layout: 'expandable',
      description: 'Innovative nozzle that produces quality foam without compressed air. Designed for tap water units and the MS ULTRA NEXT 0106 mainstation.',
      tags: ['No Compressed Air', 'Tap Water', 'Quality Foam'],
      specs: [
        { label: 'Compressed Air', value: 'Not required' },
        { label: 'Compatibility', value: 'Tap water units, MS ULTRA NEXT 0106' },
        { label: 'Output', value: 'Quality foam from water pressure alone' }
      ],
      features: ['Produces quality foam without compressed air infrastructure', 'Ideal for locations without air supply', 'Compatible with tap water pressure units and MS ULTRA NEXT 0106', 'Reduces infrastructure requirements and operating costs'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-disinfection-nozzles', name: 'Disinfection Nozzles', category: 'accessories', subsection: 'nozzles-lances', layout: 'expandable',
      description: 'Specialised stainless steel nozzles designed specifically for disinfection chemical application. Engineered for precise, even coverage.',
      tags: ['Stainless Steel', 'Disinfection', 'Precision'],
      specs: [
        { label: 'Material', value: 'Stainless steel' },
        { label: 'Purpose', value: 'Disinfection chemical application' },
        { label: 'Spray Pattern', value: 'Engineered for even coverage' }
      ],
      features: ['Designed specifically for disinfection chemical delivery', 'Stainless steel construction for hygiene and durability', 'Precision spray pattern for consistent surface coverage', 'Compatible with all FOAMICO satellite and mainstation outlets'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-lances', name: 'Rinsing & Foam Lances', category: 'accessories', subsection: 'nozzles-lances', layout: 'expandable',
      description: 'Extended reach cleaning tools in stainless steel and brass. Spray angle and flow rate encoded in model number for easy selection.',
      tags: ['Extended Reach', 'Stainless Steel', 'Brass'],
      specs: [
        { label: 'Materials', value: 'Stainless steel and brass options' },
        { label: 'Coding', value: 'Spray angle and flow rate encoded in model number' },
        { label: 'Types', value: 'Rinsing lances, foam lances' }
      ],
      features: ['Extended reach for overhead areas, ceilings, and hard-to-reach surfaces', 'Stainless steel and brass for maximum durability', 'Model number coding matches nozzle system for easy pairing', 'Ergonomic design for comfortable extended use'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-nozzle-protectors', name: 'Nozzle Protectors', category: 'accessories', subsection: 'nozzles-lances', layout: 'expandable',
      description: 'Nozzle identification and protection covers. Available in 7 colours for visual organisation of different cleaning functions across your facility.',
      tags: ['7 Colours', 'Protection', 'Identification'],
      specs: [
        { label: 'Colours', value: '7 colour options for identification' },
        { label: 'Purpose', value: 'Nozzle protection and function identification' },
        { label: 'Material', value: 'Durable protective covers' }
      ],
      features: ['7 colour options for visual identification of cleaning functions', 'Protects nozzles from damage during storage and transport', 'Enables colour-coding system across your facility', 'Quick identification reduces errors during cleaning operations'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },

    // ========== ACCESSORIES - General ==========
    {
      id: 'acc-lpv', name: 'Low-Pressure Valves', category: 'accessories', subsection: 'accessories-general', layout: 'expandable',
      description: 'Operator-controlled valves for activating rinsing, foaming, and disinfection functions. Available in brass, stainless steel, and vulcanised variants.',
      tags: ['Brass', 'Stainless Steel', 'Vulcanised'],
      specs: [
        { label: 'Materials', value: 'Brass, stainless steel, vulcanised' },
        { label: 'Types', value: 'Foam guns, valve handles, trigger valves' },
        { label: 'Function', value: 'Operator-controlled on/off and function switching' }
      ],
      features: ['Multiple material options to match application requirements', 'Ergonomic trigger and handle designs', 'Stainless steel option for maximum hygiene', 'Compatible with all FOAMICO hose assemblies'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-can-holders', name: 'Can Holders', category: 'accessories', subsection: 'accessories-general', layout: 'expandable',
      description: 'Chemical container holders for secure, organised storage of chemical cans alongside your FOAMICO equipment. Available in multiple capacity configurations.',
      tags: ['1/2/3 Cans', '23L Capacity', 'Wall Mount'],
      specs: [
        { label: 'Capacity', value: '1, 2, or 3 \u00d7 23-litre cans' },
        { label: 'Mounting', value: 'Wall-mounted' },
        { label: 'Material', value: 'Stainless steel' }
      ],
      features: ['Holds 1, 2, or 3 standard 23-litre chemical cans', 'Wall-mounted for organised, accessible storage', 'Stainless steel construction for hygiene', 'Keeps chemical containers secure and off the floor'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-limiting-nozzles', name: 'Chemical Limiting Nozzles', category: 'accessories', subsection: 'accessories-general', layout: 'expandable',
      description: 'Precision chemical dosing nozzles for controlling chemical concentration. 10-piece set with orifice sizes from 0.0mm to 1.5mm for fine-tuned dosing.',
      tags: ['10-Piece Set', '0.0\u20131.5mm', 'Precision Dosing'],
      specs: [
        { label: 'Material', value: 'Chemical-resistant plastic' },
        { label: 'Set Contents', value: '10 pieces: 0.0mm to 1.5mm orifice sizes' },
        { label: 'Purpose', value: 'Precision chemical concentration control' }
      ],
      features: ['10-piece set covers full range from 0.0mm to 1.5mm', 'Chemical-resistant plastic construction', 'Fine-tune chemical dosing for optimal cleaning results', 'Reduce chemical waste through precise concentration control'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    },
    {
      id: 'acc-install-kits', name: 'Installation Kits', category: 'accessories', subsection: 'accessories-general', layout: 'expandable',
      description: 'Setup and protection components for new FOAMICO equipment installations. Includes filters and protection elements to prevent debris damage during first use.',
      tags: ['Setup', 'Protection', 'Filters'],
      specs: [
        { label: 'Contents', value: 'Filters, protection elements, setup components' },
        { label: 'Purpose', value: 'First-use protection and installation' },
        { label: 'Protects', value: 'Flow switches and pump chambers from debris' }
      ],
      features: ['Prevents debris damage to flow switches and pump chambers during first use', 'Includes all necessary components for clean initial setup', 'Protects sensitive equipment during installation', 'Recommended for every new FOAMICO equipment installation'],
      visual: { svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35"/><circle cx="12" cy="12" r="3"/></svg>', bgColor: '#FEF2F2', color: '#ef4444' }
    }
  ]
};
