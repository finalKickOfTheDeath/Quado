export function getListState(listResult) {
	if (listResult.quados == null) {
		listResult.quados = []
	} else {
		listResult.quados = listResult.quados.map(quado => getQuadoState(quado))
	}
	return {id: listResult.id, title: listResult.title, quados: listResult.quados}

}

export function getQuadoState(quadoResult) {
	return {id: quadoResult.id, title: quadoResult.title, description: quadoResult.description, deadline: quadoResult.deadline}
}
