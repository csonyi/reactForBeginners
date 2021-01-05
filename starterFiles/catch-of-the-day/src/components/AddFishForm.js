import React from 'react'

class AddFishForm extends React.Component {
    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()

    createFish = (e) => {
        e.preventDefault()
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value) || 0,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }

        this.props.addFish(fish)

        e.currentTarget.reset()
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef} type="text" placeholder="Status">
                    <option>Fresh!</option>
                    <option>Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Description"></textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm