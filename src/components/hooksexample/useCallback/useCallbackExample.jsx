import ParentComponent from "./ParentComponent";

export default function useCallbackExample() {
  //   useCallback (callback, dependencies) can be used like useMemo(), but it memorizes functions instead of values, to prevent re-creation upon every render, which helps your application run faster.

  // useMemo is used when you don’t want to recompute the value that the function returns. It’s just that you cached the values returned from some function
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

// Thank you for your details!
// We appreciate you contacting us about getting future-ready! Our Career Advisor will get in touch with you shortly.
