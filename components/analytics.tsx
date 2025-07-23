'use client'

import Script from 'next/script'

export default function Analytics() {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'business_type',
              'custom_parameter_2': 'product_interest'
            }
          });
          
          // B2B specific tracking
          gtag('event', 'page_view', {
            'custom_parameter_1': 'B2B_Manufacturing',
            'custom_parameter_2': 'Packaging_Solutions'
          });
        `}
      </Script>
    </>
  )
} 