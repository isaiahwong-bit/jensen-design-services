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
      description: 'Self-contained portable cleaning stations with built-in pump, compressor, and NEXT block technology. One-handle operation, single outlet, incredibly manoeuvrable.',
      icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>',
        bgColor: '#F0FDFA',
        color: '#14b8a6'
      },
      heroImages: [
        { src: 'https://jensendesign.com.au/wp-content/uploads/2020/05/mobile2-e1555402573486.jpg', alt: 'FOAMICO Mobile Unit MO 0127' }
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
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'multi-pump-27bar': {
      id: 'multi-pump-27bar',
      title: 'Multi Pump Boosters \u2014 27 Bar',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'high-pressure-40-45bar': {
      id: 'high-pressure-40-45bar',
      title: 'High Pressure Boosters \u2014 40/45 Bar',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'pre-pressure-boosters': {
      id: 'pre-pressure-boosters',
      title: 'Pre-Pressure Boosters',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'ams-series': {
      id: 'ams-series',
      title: 'Automatic Mainstations \u2014 AMS Series',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'asu-series': {
      id: 'asu-series',
      title: 'Automatic Satellites \u2014 ASU Series',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'mobile-27bar': {
      id: 'mobile-27bar',
      title: 'Heavy Duty Mobile \u2014 Up to 27 Bar',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'mobile-45bar': {
      id: 'mobile-45bar',
      title: 'Heavy Duty Mobile \u2014 Up to 45 Bar',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'prediluted-satellites': {
      id: 'prediluted-satellites',
      title: 'Prediluted Satellites \u2014 PSU Series',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'mixing-stations': {
      id: 'mixing-stations',
      title: 'Mixing Stations \u2014 B-D Series',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'hoses-fittings': {
      id: 'hoses-fittings',
      title: 'Hoses & Fittings',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'nozzles-lances': {
      id: 'nozzles-lances',
      title: 'Nozzles & Lances',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
    },
    'accessories-general': {
      id: 'accessories-general',
      title: 'General Accessories',
      badgeLabel: null,
      badgeClass: null,
      layout: 'compact-grid'
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
    { id: 'b050-27', name: 'B050-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'compact', description: '1 user, 50 L/min, 2.2 kW \u2014 Grundfos IE5 motor with smart display', tag: '1 User \u00b7 27 bar' },
    { id: 'b065-27', name: 'B065-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'compact', description: '2 users, 65 L/min, 3.0 kW \u2014 Grundfos IE5 motor with smart display', tag: '2 Users \u00b7 27 bar' },
    { id: 'b100-27', name: 'B100-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'compact', description: '3 users, 100 L/min, 4.0 kW \u2014 Grundfos IE5 motor with smart display', tag: '3 Users \u00b7 27 bar' },
    { id: 'b120-27', name: 'B120-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'compact', description: '4 users, 120 L/min, 6.0 kW \u2014 Grundfos IE5 motor with smart display', tag: '4 Users \u00b7 27 bar' },
    { id: 'b200-27', name: 'B200-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'compact', description: '6 users, 200 L/min, 7.5 kW \u2014 Grundfos IE5 motor with smart display', tag: '6 Users \u00b7 27 bar' },
    { id: 'b270-27', name: 'B270-27', category: 'boosters', subsection: 'single-pump-27bar', layout: 'compact', description: '9 users, 270 L/min, 11 kW \u2014 Grundfos IE5 motor with smart display', tag: '9 Users \u00b7 27 bar' },

    // ========== BOOSTERS - Multi Pump 27 Bar ==========
    { id: 'b400-27', name: 'B400-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'compact', description: '12 users, 400 L/min, 2x 7.5 kW \u2014 Multi-pump with full pump redundancy', tag: '12 Users \u00b7 27 bar' },
    { id: 'b540-27', name: 'B540-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'compact', description: '18 users, 540 L/min, 2x 11 kW \u2014 Multi-pump with full pump redundancy', tag: '18 Users \u00b7 27 bar' },
    { id: 'b630-27', name: 'B630-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'compact', description: '21 users, 630 L/min, 2x 11 kW \u2014 Multi-pump with full pump redundancy', tag: '21 Users \u00b7 27 bar' },
    { id: 'b810-27', name: 'B810-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'compact', description: '27 users, 810 L/min, 3x 11 kW \u2014 Multi-pump with full pump redundancy', tag: '27 Users \u00b7 27 bar' },
    { id: 'b1080-27', name: 'B1080-27', category: 'boosters', subsection: 'multi-pump-27bar', layout: 'compact', description: '36 users, 1080 L/min, 4x 11 kW \u2014 Multi-pump with full pump redundancy', tag: '36 Users \u00b7 27 bar' },

    // ========== BOOSTERS - High Pressure 40/45 Bar ==========
    { id: 'b060-45', name: 'B060-45', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'compact', description: '1 user, 60 L/min, 6 kW \u2014 45 bar outlet pressure for maximum cleaning power', tag: '1 User \u00b7 45 bar' },
    { id: 'b090-40', name: 'B090-40', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'compact', description: '2 users, 90 L/min, 6 kW \u2014 40 bar outlet pressure with Grundfos IE5 motor', tag: '2 Users \u00b7 40 bar' },
    { id: 'b200-40', name: 'B200-40', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'compact', description: '6 users, 200 L/min, 6 kW \u2014 40 bar outlet pressure for large facilities', tag: '6 Users \u00b7 40 bar' },
    { id: 'b270-40', name: 'B270-40', category: 'boosters', subsection: 'high-pressure-40-45bar', layout: 'compact', description: '9 users, 270 L/min, 2x 11 kW \u2014 40 bar outlet for maximum capacity', tag: '9 Users \u00b7 40 bar' },

    // ========== BOOSTERS - Pre-Pressure ==========
    { id: 'b120-5', name: 'B120-5', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'compact', description: '120 L/min, 5 bar, 3 kW \u2014 Frequency-controlled with built-in PI regulator', tag: '5 bar \u00b7 120 L/min' },
    { id: 'b270-3', name: 'B270-3', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'compact', description: '270 L/min, 3 bar, 3 kW \u2014 Frequency-controlled with built-in PI regulator', tag: '3 bar \u00b7 270 L/min' },
    { id: 'b630-3', name: 'B630-3', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'compact', description: '630 L/min, 3 bar, 5.5 kW \u2014 Frequency-controlled with built-in PI regulator', tag: '3 bar \u00b7 630 L/min' },
    { id: 'b810-3', name: 'B810-3', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'compact', description: '810 L/min, 3 bar, 7.5 kW \u2014 Frequency-controlled with built-in PI regulator', tag: '3 bar \u00b7 810 L/min' },
    { id: 'b1080-3', name: 'B1080-3', category: 'boosters', subsection: 'pre-pressure-boosters', layout: 'compact', description: '1080 L/min, 3 bar, 11 kW \u2014 Frequency-controlled with built-in PI regulator', tag: '3 bar \u00b7 1080 L/min' },

    // ========== AUTOMATIC - AMS Series ==========
    { id: 'ams-300-150', name: 'AMS 300/150', category: 'automatic', subsection: 'ams-series', layout: 'compact', description: '1 user, 300 L/min, 6 kW \u2014 One handle, one outlet for 3 automated cleaning steps', tag: 'Automatic Mainstation' },
    { id: 'ams-300-300', name: 'AMS 300/300', category: 'automatic', subsection: 'ams-series', layout: 'compact', description: '1 user, 300 L/min, 6 kW \u2014 Automated mainstation with programmable cleaning cycles', tag: 'Automatic Mainstation' },
    { id: 'ams-300-450', name: 'AMS 300/450', category: 'automatic', subsection: 'ams-series', layout: 'compact', description: '1 user, 300 L/min, 6 kW \u2014 Highest capacity automated mainstation in the series', tag: 'Automatic Mainstation' },

    // ========== AUTOMATIC - ASU Series ==========
    { id: 'asu-450-150', name: 'ASU 450/150', category: 'automatic', subsection: 'asu-series', layout: 'compact', description: '450 L/min, 10\u201327 bar inlet \u2014 Automated satellite with single handle operation', tag: 'Automatic Satellite' },
    { id: 'asu-450-300', name: 'ASU 450/300', category: 'automatic', subsection: 'asu-series', layout: 'compact', description: '450 L/min, 10\u201327 bar inlet \u2014 Automated satellite with programmable cleaning cycles', tag: 'Automatic Satellite' },
    { id: 'asu-450-450', name: 'ASU 450/450', category: 'automatic', subsection: 'asu-series', layout: 'compact', description: '450 L/min, 10\u201327 bar inlet \u2014 Highest capacity automated satellite in the series', tag: 'Automatic Satellite' },

    // ========== MOBILE - 27 Bar ==========
    { id: 'mo-0127', name: 'MO NEXT 0127', category: 'mobile', subsection: 'mobile-27bar', layout: 'compact', description: '1 user, 50 L/min, 27 bar \u2014 Self-contained with built-in industrial compressor and smart display', tag: '1 User \u00b7 27 bar' },
    { id: 'mo-0227', name: 'MO NEXT 0227', category: 'mobile', subsection: 'mobile-27bar', layout: 'compact', description: '2 users, 100 L/min, 27 bar \u2014 Self-contained with built-in industrial compressor and smart display', tag: '2 Users \u00b7 27 bar' },
    { id: 'mo-0127-xa', name: 'MO NEXT 0127 XA', category: 'mobile', subsection: 'mobile-27bar', layout: 'compact', description: '1 user, 50 L/min, 27 bar \u2014 Without built-in compressor for facilities with existing air supply', tag: '1 User \u00b7 No Compressor' },
    { id: 'mo-0227-xa', name: 'MO NEXT 0227 XA', category: 'mobile', subsection: 'mobile-27bar', layout: 'compact', description: '2 users, 100 L/min, 27 bar \u2014 Without built-in compressor for facilities with existing air supply', tag: '2 Users \u00b7 No Compressor' },

    // ========== MOBILE - 45 Bar ==========
    { id: 'mo-0145', name: 'MO NEXT 0145', category: 'mobile', subsection: 'mobile-45bar', layout: 'compact', description: '1 user, 120 L/min, 45 bar \u2014 High-pressure mobile with built-in industrial compressor', tag: '1 User \u00b7 45 bar' },
    { id: 'mo-0145-xa', name: 'MO NEXT 0145 XA', category: 'mobile', subsection: 'mobile-45bar', layout: 'compact', description: '1 user, 120 L/min, 45 bar \u2014 High-pressure mobile without built-in compressor', tag: '1 User \u00b7 No Compressor' },

    // ========== PREDILUTED - Satellites ==========
    { id: 'psu-0127-pb2-fd', name: 'PSU 0127-PB2-FD', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'compact', description: 'Rinse, Foam, Disinfection (Spray) \u2014 2 prediluted chemicals, 60 L/min, 5\u201327 bar inlet', tag: '2 Chemicals \u00b7 Spray' },
    { id: 'psu-0127-pb2-ff', name: 'PSU 0127-PB2-FF', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'compact', description: 'Rinse, Foam, Disinfection (Foam) \u2014 2 prediluted chemicals, 60 L/min, 5\u201327 bar inlet', tag: '2 Chemicals \u00b7 Foam' },
    { id: 'psu-0127-pb2-fd-lb-f', name: 'PSU 0127-PB2-FD + LB-F', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'compact', description: 'Rinse, Foam, Disinfection (Spray) + separate local injector \u2014 3 chemicals, 60 L/min', tag: '3 Chemicals \u00b7 Spray' },
    { id: 'psu-0127-pb2-ff-lb-f', name: 'PSU 0127-PB2-FF + LB-F', category: 'prediluted', subsection: 'prediluted-satellites', layout: 'compact', description: 'Rinse, Foam, Disinfection (Foam) + separate local injector \u2014 3 chemicals, 60 L/min', tag: '3 Chemicals \u00b7 Foam' },

    // ========== PREDILUTED - Mixing Stations ==========
    { id: 'bd-40-10f', name: 'B-D 40-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'compact', description: '1\u20135 users, 40 L/min, 10 bar outlet \u2014 Grundfos IE5 pump with built-in PI regulator', tag: '1\u20135 Users \u00b7 40 L/min' },
    { id: 'bd-80-10f', name: 'B-D 80-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'compact', description: '1\u201310 users, 80 L/min, 10 bar outlet \u2014 Grundfos IE5 pump with storage tank level control', tag: '1\u201310 Users \u00b7 80 L/min' },
    { id: 'bd-120-10f', name: 'B-D 120-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'compact', description: '1\u201315 users, 120 L/min, 10 bar outlet \u2014 Grundfos IE5 pump with dry-running protection', tag: '1\u201315 Users \u00b7 120 L/min' },
    { id: 'bd-240-10f', name: 'B-D 240-10F', category: 'prediluted', subsection: 'mixing-stations', layout: 'compact', description: '1\u201325 users, 240 L/min, 10 bar outlet \u2014 Largest mixing station, 1\u00bd" inlet', tag: '1\u201325 Users \u00b7 240 L/min' },

    // ========== ACCESSORIES ==========
    { id: 'acc-hoses', name: 'FOAMICO Hoses', category: 'accessories', subsection: 'hoses-fittings', layout: 'compact', description: 'PVC hose with polyester yarn reinforcement. Operating temp: -5\u00b0C to 60\u00b0C. Stainless steel press couplings (1/2" outer thread).', tag: 'Hoses' },
    { id: 'acc-hose-fittings', name: 'Hose Fittings', category: 'accessories', subsection: 'hoses-fittings', layout: 'compact', description: 'High-quality stainless steel or galvanised connectors for secure hose connections.', tag: 'Fittings' },
    { id: 'acc-inlet-hoses', name: 'Inlet Hoses for Mobile Units', category: 'accessories', subsection: 'hoses-fittings', layout: 'compact', description: 'Flexible connection hoses for mobile stations. 3/4" diameter, available in 2.5m or 5m lengths.', tag: 'Mobile' },
    { id: 'acc-chemical-hoses', name: 'Chemical Suction Hoses', category: 'accessories', subsection: 'hoses-fittings', layout: 'compact', description: 'Colour-coded chemical hoses with highly durable construction for chemical identification.', tag: 'Chemicals' },
    { id: 'acc-hose-reels', name: 'Stainless Steel Hose Reels', category: 'accessories', subsection: 'hoses-fittings', layout: 'compact', description: 'Hose storage and management reels. Available with or without swivelling brackets.', tag: 'Storage' },

    { id: 'acc-rinsing-nozzles', name: 'Rinsing & Foam Nozzles', category: 'accessories', subsection: 'nozzles-lances', layout: 'compact', description: 'Stainless steel and brass options. First 2 digits = spray angle, last 2 = water consumption per min.', tag: 'Nozzles' },
    { id: 'acc-turbo-foam', name: 'Turbo Foam Nozzle', category: 'accessories', subsection: 'nozzles-lances', layout: 'compact', description: 'For tap water units and MS ULTRA NEXT 0106. Produces quality foam without compressed air.', tag: 'Foam' },
    { id: 'acc-disinfection-nozzles', name: 'Disinfection Nozzles', category: 'accessories', subsection: 'nozzles-lances', layout: 'compact', description: 'Specialised stainless steel nozzles designed for disinfection chemical application.', tag: 'Disinfection' },
    { id: 'acc-lances', name: 'Rinsing & Foam Lances', category: 'accessories', subsection: 'nozzles-lances', layout: 'compact', description: 'Extended reach cleaning tools in stainless steel and brass. Spray angle and flow rate coded.', tag: 'Lances' },
    { id: 'acc-nozzle-protectors', name: 'Nozzle Protectors', category: 'accessories', subsection: 'nozzles-lances', layout: 'compact', description: 'Nozzle identification and protection covers. Available in 7 colours for organisation.', tag: '7 Colours' },

    { id: 'acc-lpv', name: 'Low-Pressure Valves', category: 'accessories', subsection: 'accessories-general', layout: 'compact', description: 'Available in brass, stainless steel, and vulcanised variants. Includes foam guns and valve options.', tag: 'Valves' },
    { id: 'acc-can-holders', name: 'Can Holders', category: 'accessories', subsection: 'accessories-general', layout: 'compact', description: 'Chemical container holders. Capacity: 1, 2, or 3 x 23-litre cans.', tag: 'Storage' },
    { id: 'acc-limiting-nozzles', name: 'Chemical Limiting Nozzles', category: 'accessories', subsection: 'accessories-general', layout: 'compact', description: 'Precision chemical dosing nozzles. Chemical-resistant plastic. 10-piece set: 0.0mm to 1.5mm.', tag: 'Dosing' },
    { id: 'acc-install-kits', name: 'Installation Kits', category: 'accessories', subsection: 'accessories-general', layout: 'compact', description: 'Setup and protection components. Prevents debris damage to flow switches and pump chambers.', tag: 'Installation' }
  ]
};
