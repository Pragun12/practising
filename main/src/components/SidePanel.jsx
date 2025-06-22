import { useEffect, useRef } from "react";
import s from "./SidePanel.module.css";

export const SidePanel = ({ courseId, resourceId, url }) => {
  const sidePanelRef = useRef(null);
  useEffect(() => {
    const form = sidePanelRef.current;
    form.submit();
  }, []);
  return (
    <>
      <form
        name="panel"
        method="get"
        action={url}
        ref={sidePanelRef}
        target="side-panel-frame"
        hidden={true}
      >
        <input type="text" name='courseId' value={courseId} />
        <input type="text" name='resourceId' value={resourceId} />
        <button type="submit">submit</button>
      </form>
      <iframe
          title="side panel"
          name="side-panel-frame"
          id="side-panel-frame"
          data-test-id="side-panel-frame"
          className={s.iframe}
       />
    </>
  );
}
