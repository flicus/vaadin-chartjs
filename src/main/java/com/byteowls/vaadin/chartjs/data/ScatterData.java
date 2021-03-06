package com.byteowls.vaadin.chartjs.data;

import java.io.Serializable;

import com.byteowls.vaadin.chartjs.utils.JUtils;
import com.byteowls.vaadin.chartjs.utils.JsonBuilder;

import elemental.json.Json;
import elemental.json.JsonObject;

/**
 * Data for the scatter line chart is passed in the form of an object.
 *
 * @author michael@byteowls.com
 *
 */
public class ScatterData implements JsonBuilder, Serializable {

    private static final long serialVersionUID = 680613867864908619L;

    private Double x;
    private Double y;

    public ScatterData() {
    }

    public ScatterData(Double x, Double y) {
        this.x = x;
        this.y = y;
    }

    /**
     * X Value
     */
    public ScatterData x(Double x) {
        this.x = x;
        return this;
    }

    /**
     * Y Value
     */
    public ScatterData y(Double y) {
        this.y = y;
        return this;
    }


    @Override
    public JsonObject buildJson() {
        JsonObject obj = Json.createObject();
        JUtils.putNotNull(obj, "x", x);
        JUtils.putNotNull(obj, "y", y);
        return obj;
    }

    @Override
    public String toString() {
        return "[x=" + x + ", y=" + y + "]";
    }

}
