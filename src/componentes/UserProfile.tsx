import styles from "./UserProfile.module.css";

interface UserProfileProps {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  html_url: string;
  
}

export function UserProfile({
  avatar_url,
  name,
  login,
  bio,
  

}: UserProfileProps) {
  return (
    <div className={styles.profile}>
      <img src={avatar_url} alt={`Avatar de ${login}`} className={styles.avatar} />

      <div className={styles.info}>
        <h2>{name}</h2>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
