import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { connect } from 'react-redux';
import { SlideToggle } from 'react-slide-toggle';

import FeaturedProductsTwo from '../../products/common/product-groups/featured-products-two';

//Import Action
import { filterCategories, filterPrice, filterSize, filterBrand, filterColor, cleanFilter } from '../../../../action';

//Import Data
import _filter from '../../../../mock-data/filter.json';

//Import Utils
import { isIEBrowser, isEdgeBrowser, isFirefoxBrowser, stickyContentHandle, setStickyValues } from '../../../../utils';

function ShopSidebar ( props ) {
    const [ val, setVal ] = useState( props.filter.value );
    const [ showClean, setShowClean ] = useState( false );
    const { filterCategories, filterPrice, filterSize, filterBrand, filterColor, cleanFilter, link = "" } = props;

    useEffect( () => {
        if ( props.filter.brand.length > 0 || props.filter.category !== "" || props.filter.size.length > 0 || props.filter.color.length > 0 || props.filter.value.min > 0 || props.filter.value.max < 1000 ) {
            setShowClean( true );
        } else {
            setShowClean( false );
        }
    } )

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( "scroll", stickyContentHandle, { passive: true } );
        window.onresize = stickyContentHandle;

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    const getCount = ( item ) => {
        return props.baseProducts.filter( product => ( ( product.brand && product.format === 1 ) ? product.brand.indexOf( item ) >= 0 : 0 ) ).length;
    }

    const getBrand = ( e, item ) => {
        e.preventDefault();
        filterBrand( item );
        toTop();
    }

    const getCategory = ( e, item ) => {
        e.preventDefault();
        filterCategories( item );

    }

    const getColor = ( e ) => {
        e.preventDefault();
        filterColor( e.currentTarget.getAttribute( 'data-id' ) );
        toTop();
    }

    const getPrice = ( e ) => {
        e.preventDefault();
        filterPrice( val );
    }

    const getSize = ( e ) => {
        e.preventDefault();
        filterSize( e.currentTarget.innerText );
        toTop();
    }

    const cleanFilters = ( e ) => {
        e.preventDefault();
        setVal( { max: 1000, min: 0 } );
        cleanFilter();
    }

    const toTop = () => {
        let off_top = document.querySelector( ".toolbox" ).getBoundingClientRect().top;
        if ( off_top < -200 ) {
            if ( isIEBrowser() || isEdgeBrowser() || isFirefoxBrowser() ) {
                let pos = window.pageYOffset;
                let timer = setInterval( () => {
                    if ( pos <= off_top + window.pageYOffset - 45 )
                        clearInterval( timer );
                    window.scrollBy( 0, -40 );
                    pos -= 40;
                }, 1 );
            } else {
                window.scrollTo( {
                    top: off_top + window.pageYOffset - 45,
                    behavior: "smooth"
                } )
            }
        }
    }

    return (
        <StickyBox className="sidebar-wrapper sticky-sidebar" offsetTop={ 80 }>
            {
                link !== "filterTwo" ?
                    <SlideToggle collapsed={ false }>
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="widget overflow-hidden">
                                    <h3 className="widget-title" onClick={ setStickyValues }>
                                        <Link to="#" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ `h-auto ${toggleState.toLowerCase()}` }>Men
                                        </Link>
                                    </h3>

                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body">
                                            <ul className="cat-list">
                                                {
                                                    _filter.categories.map( ( item, index ) => (
                                                        <li key={ "filter" + index } className={ props.filter.category === item ? 'active' : '' }>
                                                            <Link to="#" onClick={ ( e ) => getCategory( e, item ) }>{ item }</Link>
                                                        </li>
                                                    ) )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </SlideToggle>

                    :
                    ""
            }

            {
                showClean ?
                    <div className="widget widget-clean">
                        <button className="btn btn-primary btn-md" onClick={ cleanFilters }>Reset All Filters</button>
                    </div>
                    : ""
            }

            <SlideToggle collapsed={ false }>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="widget price-widget overflow-hidden">
                            <h3 className="widget-title">
                                <Link to="#" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ `h-auto ${toggleState.toLowerCase()}` }>Price
                                        </Link>
                            </h3>

                            <div ref={ setCollapsibleElement }>
                                <div className="widget-body">
                                    <form action="#">
                                        <div className="price-slider-wrapper">
                                            <InputRange
                                                maxValue={ 1000 }
                                                minValue={ 0 }
                                                step={ 50 }
                                                value={ val }
                                                onChange={ value => { setVal( value ); } } />
                                        </div>

                                        <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                            <button type="submit" className="btn btn-primary" onClick={ getPrice }>Filter</button>

                                            <div className="filter-price-text">
                                                Price:
                                                <span id="filter-price-range">{ "$" + val.min.toFixed( 2 ) + " - $" + val.max.toFixed( 2 ) }</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    )
                }
            </SlideToggle>

            <SlideToggle collapsed={ false }>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="widget overflow-hidden">
                            <h3 className="widget-title">
                                <Link to="#" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ `h-auto ${toggleState.toLowerCase()}` }>Size</Link>
                            </h3>

                            <div ref={ setCollapsibleElement }>
                                <div className="widget-body">
                                    <ul className="cat-list">
                                        {
                                            _filter.Size.map( ( item, index ) => (
                                                <li key={ "size" + index } className={ props.filter.size.indexOf( item ) >= 0 ? 'active' : '' }>
                                                    <Link to="#" onClick={ getSize }>{ item }</Link>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    )
                }
            </SlideToggle>

            {
                link !== "filterTwo" ?
                    <SlideToggle collapsed={ false }>
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="widget overflow-hidden">
                                    <h3 className="widget-title">
                                        <Link to="#" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ `h-auto ${toggleState.toLowerCase()}` }>Brand</Link>
                                    </h3>

                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body">
                                            <ul className="cat-list">
                                                {
                                                    _filter.Brands.map( ( item, index ) => (
                                                        <li key={ "brand" + index } className={ props.filter.brand.indexOf( item ) >= 0 ? 'active' : '' }>
                                                            <Link to="#" onClick={ ( e ) => getBrand( e, item ) }>{ item + ' (' + getCount( item ) + ')' }</Link>
                                                        </li>
                                                    ) )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </SlideToggle>
                    :
                    ""
            }

            <SlideToggle collapsed={ false }>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="widget overflow-hidden">
                            <h3 className="widget-title">
                                <Link to="#" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ `h-auto ${toggleState.toLowerCase()}` }>Color</Link>
                            </h3>

                            <div ref={ setCollapsibleElement }>
                                <div className="widget-body">
                                    <ul className="config-swatch-list">
                                        {
                                            _filter.Colors.map( ( item, index ) => (
                                                <li key={ "color" + index } className={ props.filter.color.indexOf( item.value ) >= 0 ? 'active' : '' }>
                                                    <Link to="#" style={ { backgroundColor: item.value } } onClick={ getColor } data-id={ item.value }></Link>
                                                    <span>{ item.name }</span>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    )
                }
            </SlideToggle>

            <FeaturedProductsTwo />
            <div className="widget widget-block">
                <h3 className="widget-title">Custom HTML Block</h3>
                <h5>This is a custom sub-title.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>
            </div>
        </StickyBox>
    )
}

const mapStateToProps = ( state ) => {
    return {
        baseProducts: state.data.products ? state.data.products : [],
        filter: state.filter ? state.filter : []
    }
}

export default connect( mapStateToProps, { filterCategories, filterPrice, filterSize, filterBrand, filterColor, cleanFilter } )( ShopSidebar );
