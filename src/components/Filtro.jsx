import React, { Component } from 'react'

export default class Filtro extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Produtos</div>
                <div className="filter-sort">
                    Ordenar:{" "}
                    <select value={this.props.sortorder} onChange={this.props.sortProducts}>
                        <option value="">Mais Recentes</option>
                        <option value="lowest">Menor Preço</option>
                        <option value="highest">Maior Preço</option>
                    </select>
                </div>
                <div className="filter-size"> Tamanhos:{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">Todos</option>
                        <option value="XS">PP</option>
                        <option value="S">P</option>
                        <option value="M">M</option>
                        <option value="L">G</option>
                        <option value="XL">GG</option>
                        <option value="XXL">XXG</option>
                    </select>
                </div>
            </div>
        )
    }
}
