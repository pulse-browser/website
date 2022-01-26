import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider'

import { Button, Nav } from '..'

export const Hero = () => (
  <div className="bg-gray-100 text-center space-y-8 ">
    <Nav />

    <div className="leading-tight">
      <h1 className="text-7xl font-bold">Pulse Browser</h1>
      <p className="text-lg font-normal">
        An experimental Firefox fork that enhances focus and increases work
        productivity due to its hyper minimalistic UI and built-in tools.
      </p>
    </div>

    <div className="flex justify-center break-normal">
      <div className="w-3/6">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="/assets/dark.png"
              srcSet="/assets/dark.png"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="/assets/light.png"
              srcSet="/assets/light.png"
              alt="Image two"
            />
          }
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

    <div className="">
      <Button href="/download" type="primary">
        <i className="bi bi-download"></i> Download
      </Button>
      <Button href="#features" type="text">
        Learn More
      </Button>
    </div>

    <div className="relative">
      <div className="w-full border-t border-gray-300"></div>
    </div>
  </div>
)
