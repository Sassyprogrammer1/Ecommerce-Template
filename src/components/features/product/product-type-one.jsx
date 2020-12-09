import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart, addToWishList, showQuickView } from '../../../action';
import { findIndex } from '../../../utils';

function ProductTypeOne( props ) {
    const { addClass, product, showQuickView, addToCart } = props;
    let isInWishlist = props.product ? ( findIndex( props.wishlist, props.product.id ) ? true : false ) : false;
    if ( !product ) return ( <div></div> );

    const onWishlistClick = ( e ) => {
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( props.product );
        }
    }

    return (
        <div className={ `product-default ${ addClass }` }>
            <figure>
                <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ product.id }` } >
                    <span>
                        <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } className="first-image" alt="product" />
                    </span>
                    {
                        product.pictures[ 1 ] ?
                            <span className="product-image-hover">
                                <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] } className="last-image" alt="product" />
                            </span> : ""

                    }
                </Link>
                <div className="label-group">
                    {
                        product.discount && product.salePrice ?
                            <span className="product-label label-sale">{ product.discount }% OFF</span>
                            : ""
                    }
                    {
                        !product.salePrice && product.featured ?
                            <span className="product-label label-hot">hot</span>
                            : ""
                    }
                    {
                        !product.salePrice && product.new ?
                            <span className="product-label label-sale">new</span>
                            : ""
                    }
                </div>
                <div className="btn-icon-group">
                    <button className="btn-icon btn-add-cart" onClick={ () => addToCart( product ) }><i className="icon-bag"></i></button>
                    <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `btn-icon btn-icon-wish ${ isInWishlist ? 'checked' : '' }` } onClick={ onWishlistClick }>
                        <i className="icon-heart"></i>
                    </Link>
                </div>
                <Link to="#" className="btn-quickview" title="Quick View" onClick={ ( e ) => { e.preventDefault(); showQuickView( product ) } }>Quick View</Link>
            </figure>
            <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                        {
                            product.category.map( ( category, index ) => (
                                index === ( product.category.length - 1 ) ?
                                    <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }</Link>
                                    : <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }, </Link>
                            ) )
                        }
                    </div>
                </div>
                <h2 className="product-title">
                    <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ product.id }` }>{ product.name }</Link>
                </h2>
                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div>
                {
                    product.salePrice ?
                        <div className="price-box">
                            <span className="old-price">${ product.price.toFixed( 2 ) }</span>
                            <span className="product-price">${ product.salePrice.toFixed( 2 ) }</span>
                        </div>
                        :
                        <div className="price-box">
                            <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart, addToWishList, showQuickView } )( ProductTypeOne );
