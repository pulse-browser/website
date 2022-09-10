import Image from 'next/image'
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from 'react-compare-slider'

import { Button, Nav } from '..'

import darkCompare from '../../public/assets/dark.png'
import lightCompare from '../../public/assets/light.png'
import download from '../../public/assets/downloads.svg'

export const Hero = () => (
  <div className="bg-gray-100">
    <Nav />
    <div className="md:grid grid-cols-2 items-center p-5 md:px-10 lg:px-40 py-10">
      <div className="flex justify-center">
        <div className="text-left w-full md:w-2/4">
          <h1 className="text-5xl md:text-7xl inline-flex py-2 lg:py-12">
            <p className="font-bold">Pulse</p>
            <p className="font-light pl-2">Browser</p>
          </h1>

          <p className="text-lg font-normal">
            An experimental Firefox fork that enhances focus and increases work
            productivity due to its hyper minimalistic UI and built-in tools.
          </p>
          <div className="pt-8">
            <Button href="/download" type="download">
              <Image
                src={download}
                alt="Download icon"
                layout="fixed"
                width={16}
                height={16}
              />{' '}
              Download
            </Button>
            <Button href="#features" type="large-text">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-0">
        <img src="/assets/pulse-back.svg" className="md:w-3/4 h-1/4"></img>
        <div className="md:w-3/4 absolute inset-0 z-10 flex justify-center items-center">
          <ReactCompareSlider
            itemOne={<Image src={darkCompare} alt="Pulse Dark" />}
            itemTwo={<Image src={lightCompare} alt="Pulse Light" />}
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  backdropFilter: undefined,
                  WebkitBackdropFilter: undefined,
                  boxShadow: undefined,
                  color: 'white',
                  backgroundColor: '#444',
                  border: 0,
                  transform: 'scale(0.5)',
                }}
                linesStyle={{ opacity: 0 }}
              />
            }
          />
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="w-full border-t border-gray-300"></div>
    </div>
  </div>
)
