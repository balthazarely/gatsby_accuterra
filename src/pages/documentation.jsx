// import React, { useRef, useEffect, useState } from 'react';
// import Footer from '../components/footer';
// import Layout from '../layouts/layout';
// import SEO from '../components/seo';

// export default function Documentation({ location }) {
//   return (
//     <Layout location={location} transition={false}>
//       <SEO title="Documentation" />
//       <div>DOCS Page</div>;
//     </Layout>
//   );
// }
import React, { useRef, useEffect, useState } from 'react';
import WebMap from '../components/documentation/WebMap';
import StyleMap from '../components/documentation/StyleMap';
import MobileMap from '../components/documentation/mobileMap';
import { GettingStarted } from '../components/documentation/gettingStarted';
import Footer from '../components/footer';
import Layout from '../layouts/layout';
import Seo from '../components/seo';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default function Documentation({ location }) {
  const [visibleSection, setVisibleSection] = useState();

  const gettingStarted = useRef(null);
  const mapStyle = useRef(null);
  const webMap = useRef(null);
  const mobileMap = useRef(null);

  const sectionRefs = [
    { section: 'GettingStarted', ref: gettingStarted },
    { section: 'MapStyle', ref: mapStyle },
    { section: 'WebMap', ref: webMap },
    { section: 'MobileMap', ref: mobileMap },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + 200;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  return (
    <Layout location={location} transition={false}>
      <Seo title="Documentation" />
      <div className="content items-stretch  flex-grow">
        <div className="container mx-auto ">
          <div className="my-24">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 ">
              <div className="col-span-1  w-100    ">
                <div className="lg:fixed  flex-1 ml-0 mt-0 p-4  ob object-cover bg-white shadow-lg mb-8">
                  <div className="flex flex-col text-left ">
                    <div
                      className={` text-sm uppercase font-semibold my-2 cursor-pointer  ${
                        visibleSection === 'GettingStarted'
                          ? ' text-accuterraBlue-500'
                          : ' text-gray-400'
                      }`}
                      onClick={() => {
                        scrollTo(gettingStarted.current);
                      }}
                    >
                      Getting Started
                    </div>
                    <div
                      className={` text-sm uppercase font-semibold my-2 cursor-pointer up ${
                        visibleSection === 'MapStyle'
                          ? ' text-accuterraBlue-500 '
                          : ' text-gray-400'
                      }`}
                      onClick={() => {
                        scrollTo(mapStyle.current);
                      }}
                    >
                      Map Style
                    </div>
                    <div
                      className={`text-sm uppercase font-semibold my-2 cursor-pointer  ${
                        visibleSection === 'WebMap'
                          ? ' text-accuterraBlue-500 '
                          : ' text-gray-400'
                      }`}
                      onClick={() => {
                        scrollTo(webMap.current);
                      }}
                    >
                      Web Code Sample
                    </div>
                    <div
                      className={` text-sm uppercase font-semibold my-2 cursor-pointer  ${
                        visibleSection === 'MobileMap'
                          ? ' text-accuterraBlue-500 '
                          : ' text-gray-400'
                      }`}
                      onClick={() => {
                        scrollTo(mobileMap.current);
                      }}
                    >
                      Mobile Code Sample
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <div>
                  <div
                    className="section  h-100 w-100 border-2 border-transparent  "
                    id="Leadership"
                    ref={gettingStarted}
                  >
                    <GettingStarted />
                  </div>
                  <div
                    className="section h-100 w-100 border-2  border-transparent  "
                    id="Providers"
                    ref={mapStyle}
                  >
                    <StyleMap />
                  </div>
                  <div
                    className="section  h-100 w-100 border-2  border-transparent  "
                    id="Operations"
                    ref={webMap}
                  >
                    <WebMap />
                  </div>
                  <div
                    className="section  h-100 w-100 border-2  border-transparent  "
                    id="Operations"
                    ref={mobileMap}
                  >
                    <MobileMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
