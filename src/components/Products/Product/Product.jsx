import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import { AddShoppingCart, BorderColor } from "@material-ui/icons"
import useStyles from './styles';

function Product({product, onAddToCart}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h4" gutterBottom color="white" style={{color: "white"}}>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" style={{color: "#ffbe33"}}>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description }} variant="body2" style={{color: "white"}} />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)} style={{color: "white"}}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
