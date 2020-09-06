import $ from "../core";

$.prototype.getAttr = function (attributesName) {
	for (let i = 0; i < this.length; i++) {
		for (let attr of this[i].attributes) {
			if (attr.name === attributesName) {
				return attr.value;
			}
		}
	}
	return this;
};

$.prototype.setAttr = function (attributesName, value) {
	for (let i = 0; i < this.length; i++) {
		this[i].setAttribute(attributesName, value);
	}

	return this;
};

$.prototype.delAttr = function (attributesName) {
	for (let i = 0; i < this.length; i++) {
		this[i].removeAttribute(attributesName);
	}

	return this;
};
