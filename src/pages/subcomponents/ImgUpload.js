// This is a subcomponent of the Gallery component.

const ImgUpload = () => {
    return (
        // Return the JSX for rendering the ImgUpload subcomponent
        <div className="">
            {/* A heading describing the purpose of the subcomponent */}
            <h1 className="pt-20 mt-20 break-normal font-semibold text-xl text-orange-600">
                This is the subcomponent for users to post images.
            </h1>

            {/* A second heading mentioning who will work on this subcomponent */}
            <h1 className="break-normal font-semibold text-xl text-orange-600">
                Kelly will work on this.
            </h1>
        </div>
    );
}

// Export the ImgUpload subcomponent so it can be used in the Gallery component or elsewhere
export default ImgUpload;