const CreateSegments = () => 
{
    <div className="container">
       <h2>Saving Segment</h2>
       <form>
           <div>
               <label htmlFor="name-segment" className="form-label">
               Enter the Name of the Segment
               </label>
               <input
               type="text"
               id="name-segment"
               placeholder="Name of the Segment"
               className="form-control"
               />
           </div>
           <p>
               To save your segment, you need to add the schemas to build the query
           </p>
           <select className="form-select">
               <option selected>Add Schema to Segment</option>
               {/* {schemaOptions.map((schema) => {
               return (
                   <option key={schema.value} value={schema.value}>
                   {schema.label}
                   </option>
               );
               })} */}
           </select>
           {/* Add Drop Down option */}
           <button type="button" className="btn btn-link text-success fw-bold">+Add new Schema</button>
          
           <div className="d-flex gap-2">
               <button className="btn btn-success">Save the Segment</button>
               <button type="button" className="btn btn-danger">Cancel</button>
           </div>
       </form>
   </div>

};

export default CreateSegments;
