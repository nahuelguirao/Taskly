export async function handleLogoutNotification(
  handleLogout: () => void,
  setShowLogoutMessage: (open: boolean) => void
) {
  handleLogout();
  setShowLogoutMessage(true);

  setTimeout(() => {
    setShowLogoutMessage(false);
  }, 5000);
}
