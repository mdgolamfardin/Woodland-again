// This is a subcomponent of the gallery.
import Layer from "./Layer";
import floraData from "../../data/floraData"
import faunaData from "../../data/faunaData"
import fungiData from "../../data/fungiData"

const FloraFaunaFungi = () => {
  return (
    <div className="flex-row pt-2 pb-5"> 
        <Layer 
            heading="Flora"
            data={floraData}
            />
        <Layer 
            heading="Fauna"
            data={faunaData}
            />
        <Layer 
            heading="Fungi"
            data={fungiData}
        />
    </div>
  );
};
export default FloraFaunaFungi;
