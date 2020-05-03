export default function getToken() {
  const token = localStorage.getItem('token');
  const AuthStr = 'Bearer '.concat(token);
  return AuthStr;
}