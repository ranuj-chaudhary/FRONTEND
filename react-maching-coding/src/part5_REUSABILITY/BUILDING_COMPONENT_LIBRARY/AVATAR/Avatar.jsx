import React from 'react';
import { IoPersonSharp } from 'react-icons/io5';

/**
 * Challenge: Create a flexible Avatar component!
 *
 * Check the slides for notes on how the component
 * should be used.
 *
 * Each of the 3 different avatars should have a
 * wrapper div with the classes below:
 *
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 *
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 *
 * Check the hints.md file if you are really stuck.
 *
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */
const style = {
  image: `avatar`,
  initials: `avatar avatar-letters`,
  anonymous: `avatar avatar-icon`,
};
export default function Avatar({ src, alt, children, background, className }) {
  const avatarClass = background || '';
  if (src && alt) {
    return (
      <div className={style.image + ' ' + avatarClass}>
        <img src={src} alt={alt} />
      </div>
    );
  }

  if (children) {
    return <div className={style.initials + ' ' + avatarClass}>{children}</div>;
  }

  return (
    <div className={style.anonymous + ' ' + avatarClass}>
      <IoPersonSharp />
    </div>
  );
}
