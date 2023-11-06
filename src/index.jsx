import { useState } from "react";
import data from "../lib/data";
import SortableImage from "./components/SortableImage";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const DragEndDrop = () => {
  const [images, setImages] = useState(data);
  const [hideShow, sethideShow] = useState(false);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };

  const handleClick = (e) => {
    const { id } = e.target
    console.log(id)
    
    // setSelect(click);
  };

  return (
    <div className="mt-4">
      <div className="container border border-2 rounded-3">
        {
          hideShow ? 
          <div className="row p-3 justify-content-center border-bottom">
            <div className="col-5">
              <h5>Files Selected</h5>
            </div>
            <div className="col-5">
              <h5 className="text-end text-danger">Delete file</h5>
            </div>
          </div>
          :
          <div className="row p-3 justify-content-center border-bottom">
            <div className="col-5">
              <h5>Gallery</h5>
            </div>
            <div className="col-5">
              <h5 className="text-end text-danger"></h5>
            </div>
          </div>
        }
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={images} strategy={verticalListSortingStrategy}>
            <div className="row justify-content-center pt-3 pb-3">
              <SortableImage handleClick={handleClick} images={images[0]} colStyle={'col-4 firstimg'} id={0} />
              <div className="col-6 row">
                <SortableImage handleClick={handleClick} images={images[1]} colStyle={'col-4'} id={1} />
                <SortableImage handleClick={handleClick} images={images[2]} colStyle={'col-4'} id={2} />
                <SortableImage handleClick={handleClick} images={images[3]} colStyle={'col-4'} id={3} />
                <SortableImage handleClick={handleClick} images={images[4]} colStyle={'col-4'} id={4} />
                <SortableImage handleClick={handleClick} images={images[5]} colStyle={'col-4'} id={5} />
                <SortableImage handleClick={handleClick} images={images[6]} colStyle={'col-4'} id={6} />
              </div>
              <div className="col-12 row justify-content-center">
                <SortableImage handleClick={handleClick} images={images[7]} colStyle={'col-2'} id={7} />
                <SortableImage handleClick={handleClick} images={images[8]} colStyle={'col-2'} id={8} />
                <SortableImage handleClick={handleClick} images={images[9]} colStyle={'col-2'} id={9} />
                <SortableImage handleClick={handleClick} images={images[10]} colStyle={'col-2'} id={10} />
                <div className="col-2 lastBox" >
                  <div className="text-center text-secondary-emphasis">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                    </svg>
                    <p className="mt-2">Add Image</p>
                  </div>
                </div>
              </div>
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
export default DragEndDrop;
