-- Create a PostgreSQL trigger function
CREATE OR REPLACE FUNCTION fetch_and_save_plant_data_trigger()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM pg_notify('fetch_and_save_plant_data', '');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger that fires after INSERT on the specified table
CREATE TRIGGER insert_plant_data_trigger
AFTER INSERT ON plant_app_plant
FOR EACH ROW
EXECUTE FUNCTION fetch_and_save_plant_data_trigger();

-- making trigger to fire off every time an insert occurs for the plant_app_plant table