import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableImage = ({ handleClick, images, colStyle, id}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: images.id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`${colStyle} imgcomp`} >
      <img src={images.img} alt="Image" className="img-fluid imagesty" />
      <div className="top">
        <input 
          type='checkbox' 
          value={id}
          onChange={ handleClick }
        />
      </div>
    </div>
  );
};

export default SortableImage;