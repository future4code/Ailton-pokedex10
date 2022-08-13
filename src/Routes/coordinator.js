export const goToDetails = (navigate, name, id) => {
    navigate(`/details/${name}/${id}`)
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToHome = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1);
  };