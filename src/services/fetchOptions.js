const { VITE_SERVER_ADDRESS, VITE_SERVER_PORT } = import.meta.env
const url = `http://${VITE_SERVER_ADDRESS}:${VITE_SERVER_PORT}/`

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Accept": "application/json"
}

function getUrlAndHeaders() {
  return {
    url,
    headers
  }
}

export { getUrlAndHeaders }
