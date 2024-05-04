import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Login</Text>
        <Text>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputStyle}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
          rules={{ required: "Email is required" }}
        />
        {errors.email && (
          <Text style={styles.errorsStyle}>{errors.email.message}</Text>
        )}

        <Text>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputStyle}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder="Password"
            />
          )}
          name="password"
          rules={{ required: "Password is required" }}
        />
        {errors.password && (
          <Text style={styles.errorsStyle}>{errors.password.message}</Text>
        )}

        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewStyle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingStyle: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputStyle: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errorsStyle: {
    color: "red",
    marginBottom: 10,
  },
});
