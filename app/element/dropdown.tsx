"use client";

import React, { type ReactNode } from "react";
import styles from "./styles.module.css";

export default React.memo<{
  children?: ReactNode;
  onClickOutside?: (e: Event) => void;
  show: boolean;
}>(({ show = false, children, onClickOutside }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        show = false;
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => document.removeEventListener("click", handleClickOutside, true);
  }, [onClickOutside, show]);

  return (
    <div ref={ref} className={styles.ddmodule} aria-expanded={show} id="info-panel">
      {children}
      <div className={styles.ddmenu} aria-labelledby="info-panel" tabIndex={show ? 0 : -1}>
        <div className={styles.ddbody}>
          <p>Content below to demonstrate what an Information block can look like.</p>
        </div>
        <div className={styles.ddfooter}>
          <div className={styles.footnote}>
            <p>
              <small>Some note, that's important</small>
            </p>
          </div>
          <button onClick={onClickOutside} className={styles.btn}>
            Cancel
          </button>
          <button onClick={onClickOutside} className={styles.btnAlt}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
});
